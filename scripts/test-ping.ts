import { pingDevice } from '../lib/network-utils'

async function testPing() {
  console.log('=== Simple Ping Test ===')
  console.log('Testing pingDevice function...\n')

  try {
    const result = await pingDevice('8.8.8.8', 3)

    console.log('\n=== Final Result ===')
    if (result) {
      console.log('Success:', result.success)
      console.log('Response Time:', result.responseTime, 'ms')
      console.log('Packet Loss:', result.packetLoss + '%')
    } else {
      console.log('Result was null')
    }
  } catch (error) {
    console.error('Error:', error)
  }

  console.log('\n=== Test Complete ===')
}

testPing()
