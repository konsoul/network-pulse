'use client'
import { useState } from 'react'

const callPingAPI = async (ipAddress: string) => {
  const response = await fetch('/api/ping', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ipAddress, count: 3 }),
  })

  if (!response.ok) {
    throw new Error('Ping request failed')
  }
  return await response.json()
}

export default function Home() {
  const [ipAddress, setIpAddress] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{
    success: boolean
    responseTime: number
    packetLoss: number
  } | null>(null)

  const handlePing = async () => {
    setIsLoading(true)
    setResult(null)

    if (!ipAddress.trim()) return

    try {
      const pingResult = await callPingAPI(ipAddress)
      setResult(pingResult)
    } catch (err) {
      console.error('Ping error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='bg-gray min-h-screen bg-gray-800 p-8'>
      <div className='mx-auto max-w-2xl'>
        <h1 className='mb-8 text-center text-3xl font-bold'>
          Network Ping Tool
        </h1>
        {/* Form will go here */}
        <div className='bg-gray rounded-lg p-6 shadow-md'>
          <div className='mb-4'>
            <label className='mb-2 block bg-gray-800 text-sm font-medium text-white'>
              IP Address:
            </label>

            <input
              type='text'
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
              placeholder='ip address'
              className='w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
            ></input>
          </div>
        </div>
      </div>
    </div>
  )
}
