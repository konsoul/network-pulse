import { NextRequest, NextResponse } from 'next/server'
import { pingDevice } from '../../../lib/network-utils'

export async function POST(request: NextRequest) {
  try {
    const { ipAddress, count = 3 } = await request.json()

    if (!ipAddress) {
      return NextResponse.json(
        { error: 'IP Address Required' },
        { status: 400 }
      )
    }

    const result = await pingDevice(ipAddress, count)
    return NextResponse.json(result)
  } catch (err) {
    return NextResponse.json({ error: 'Ping Failed' }, { status: 500 })
  }
}
