import { exec } from 'child_process'
import { promisify } from 'util'

import { NetworkDevice, DeviceMetrics } from '../types/networkDevice'

const execAsync = promisify(exec)

export async function pingDevice(
  ipAddress: string,
  count: number = 3
): Promise<{
  success: boolean
  responseTime: number
  packetLoss: number
} | null> {
  try {
    const command = `ping -c ${count} ${ipAddress}`
    const { stdout } = await execAsync(command)

    // Parse ping output to extract response time and packet loss
    const lines = stdout.split('\n')
    console.log(lines)
    const statsLine = lines.find((line) => line.includes('packet loss'))
    const timingLine = lines.find((line) => line.includes('round-trip'))

    if (!statsLine || !timingLine) {
      console.log('Could not parse ping output')
      return null
    }

    // Extract packet loss percent
    const packetLossMatch = statsLine.match(/(\d+\.?\d*)% packet loss/)
    const packetLoss = packetLossMatch ? parseFloat(packetLossMatch[1]) : 100

    //Extract average response time
    const timingMatch = timingLine.match(/= [\d.]+\/([\d.]+)\/[\d.]+/)
    const responseTime = timingMatch ? parseFloat(timingMatch[1]) : 0

    return {
      success: packetLoss < 100,
      responseTime: responseTime,
      packetLoss: packetLoss,
    }
  } catch (error) {
    console.error('Ping failed:', error)
    return null
  }
}
