export interface NetworkDevice {
  // This hold all the device data we need
  id: string
  name: string
  ip_address: string
  device_type: 'router' | 'switch' | 'server' | 'workstation' | 'other'
  status: 'online' | 'offline' | 'warning' | 'critical'
  last_seen: Date
  location?: string // the ? means this is optional
  metrics: DeviceMetrics
}

export interface DeviceMetrics {
  // This will hold all the performance data as a nested object inside of NetworkDevice
  ping_response_time: number
  packet_loss_percentage: number
  bandwidth_utilization: number
  cpu_usage?: number
  uptime: number
  timestamp: Date
}

export interface NetworkAlert {
  id: string
  device_id: string
  alert_type: 'connectivity' | 'performanace' | 'threshold' | 'security'
  severity: 'info' | 'warning' | 'critical'
  message: string
  timestamp: Date
  acknowledged: boolean
  resolved: boolean
}
