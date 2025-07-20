# Network Diagnostic Tools Strategy

## 📅 Document Information

**Created**: July 20, 2025  
**Purpose**: Comprehensive guide to available network diagnostic tools and their integration strategy  
**Project**: Network Pulse - Real-time Network Monitoring Dashboard

---

## 🛠️ Available Network Diagnostic Tools

### ✅ **Core Tools Available on macOS System:**

#### 1. **PING** (`/sbin/ping`) - Primary Router Monitoring

**Data Provided:**

- Response time (milliseconds) → `DeviceMetrics.ping_response_time`
- Packet loss percentage → `DeviceMetrics.packet_loss_percentage`
- Round-trip statistics (min/avg/max)
- TTL (Time to Live)
- Connectivity status (online/offline) → `NetworkDevice.status`

**Current Test Results:**

- Router IP: `192.168.0.1`
- Average response: ~8.6ms
- Packet loss: 0%
- Status: Excellent connectivity

**Example Usage:**

```bash
ping -c 4 192.168.0.1
```

#### 2. **TRACEROUTE** (`/usr/sbin/traceroute`) - Network Path Analysis

**Data Provided:**

- Network path hops
- Latency per hop
- Network topology mapping
- Route discovery and bottleneck identification

**Use Case:** Understanding network infrastructure, identifying slow hops

**Example Usage:**

```bash
traceroute -m 5 192.168.0.1
```

#### 3. **ARP** (`/usr/sbin/arp`) - Network Device Discovery

**Data Provided:**

- Automatic network device discovery (detected 5+ devices on current network)
- MAC addresses of network devices
- IP to MAC address mapping → Helps populate `NetworkDevice` entries
- Device presence/absence detection

**Current Network Devices Detected:**

- Router: `192.168.0.1` (MAC: `48:22:54:4d:9c:bc`)
- Additional devices at: `.27`, `.79`, `.85` and others

**Example Usage:**

```bash
arp -a
```

#### 4. **NETSTAT** (`/usr/sbin/netstat`) - Network Interface Statistics

**Data Provided:**

- Routing table information
- Network interface statistics → `DeviceMetrics.bandwidth_utilization`
- Connection states
- Default gateway validation

**Example Usage:**

```bash
netstat -rn | grep default
```

#### 5. **NETWORKSETUP** (`/usr/sbin/networksetup`) - Configuration Data

**Data Provided:**

- Network configuration details
- Interface status
- DHCP/Static IP information
- Network adapter information

**Current Configuration:**

- Machine IP: `192.168.0.136`
- Subnet: `255.255.255.0`
- Router/Gateway: `192.168.0.1`

**Example Usage:**

```bash
networksetup -getinfo "Wi-Fi"
```

#### 6. **DNS Tools** (`/usr/bin/dig`, `/usr/bin/host`, `/usr/bin/nslookup`)

**Data Provided:**

- DNS resolution testing
- DNS server response times
- Domain name lookups
- DNS health monitoring

**Example Usage:**

```bash
dig google.com
host google.com
nslookup google.com
```

---

## 📊 **Network Monitoring Strategy**

### **Primary Monitoring (Phase 1)**

**Focus**: Essential network health metrics

- `ping` - Router health, response times, connectivity status
- `arp` - Automatic device discovery and presence detection
- `traceroute` - Network path analysis and performance

**Priority**: Implement first for core functionality

### **Secondary Monitoring (Phase 2)**

**Focus**: Enhanced network insights

- `dig` - DNS performance testing
- `netstat` - Interface statistics and bandwidth utilization
- `networksetup` - Configuration validation

**Priority**: Add after Phase 1 is stable

### **Advanced Features (Phase 3)**

**Focus**: Professional-grade monitoring

- External internet connectivity tests
- Historical trending and alerting
- Network topology visualization
- Performance anomaly detection

**Priority**: Future enhancement phase

---

## 🎯 **Data Mapping to TypeScript Interfaces**

### **NetworkDevice Interface Mapping**

```typescript
interface NetworkDevice {
  id: string // Generated UUID
  name: string // From ARP hostname lookup or manual assignment
  ip_address: string // From ARP table discovery
  device_type: string // Inferred from MAC address OUI or manual classification
  status: string // Derived from ping response (online/offline/warning/critical)
  last_seen: Date // Timestamp of last successful ping
  location?: string // Manual assignment or network-based inference
  metrics: DeviceMetrics // Populated from ping, netstat, and other tools
}
```

### **DeviceMetrics Interface Mapping**

```typescript
interface DeviceMetrics {
  ping_response_time: number // From ping command output (ms)
  packet_loss_percentage: number // From ping statistics (%)
  bandwidth_utilization: number // From netstat interface statistics (%)
  cpu_usage?: number // Not available via network tools (would need SNMP)
  uptime: number // Estimated from continuous monitoring (seconds)
  timestamp: Date // Current system time
}
```

### **NetworkAlert Interface Mapping**

```typescript
interface NetworkAlert {
  // Generated based on threshold violations:
  // - High ping response times (> 100ms warning, > 500ms critical)
  // - Packet loss detection (> 1% warning, > 5% critical)
  // - Device connectivity failures (ping timeout)
  // - Network path changes (traceroute differences)
}
```

---

## 🔧 **Implementation Approach**

### **Backend Services**

1. **Network Utility Wrapper Functions** (`lib/network-utils.ts`)
   - Execute system commands safely
   - Parse command output into structured data
   - Handle errors and timeouts gracefully
   - Map raw data to TypeScript interfaces

2. **Data Collection Services** (`lib/data-collectors.ts`)
   - Periodic network scanning
   - Device discovery and monitoring
   - Metric aggregation and storage
   - Alert generation based on thresholds

3. **API Endpoints** (`app/api/`)
   - Expose network data via REST API
   - Real-time data streaming (Server-Sent Events)
   - Device management operations
   - Alert acknowledgment and management

### **Frontend Components**

1. **Dashboard Components**
   - Network overview widget
   - Device status cards
   - Real-time metric charts
   - Alert notification center

2. **Diagnostic Components**
   - Ping test interface
   - Traceroute visualization
   - Device discovery results
   - Network topology map

### **Real-time Updates**

1. **Data Refresh Strategy**
   - Ping tests: Every 30 seconds
   - ARP discovery: Every 5 minutes
   - Interface statistics: Every 60 seconds
   - DNS tests: Every 10 minutes

2. **Alert Generation**
   - Immediate: Connectivity failures
   - Threshold-based: Performance degradation
   - Pattern-based: Unusual network behavior

---

## 🚀 **Implementation Priority**

### **Phase 1: Foundation (Current Priority)**

1. Create `lib/network-utils.ts` with ping utility function
2. Implement basic device discovery via ARP
3. Create first API endpoint for device data
4. Build simple dashboard to display router status

### **Phase 2: Enhancement**

1. Add traceroute functionality
2. Implement DNS performance testing
3. Create alert generation system
4. Add real-time data streaming

### **Phase 3: Advanced Features**

1. Historical data tracking
2. Network topology visualization
3. Performance trend analysis
4. Advanced alerting rules

---

## 📝 **Development Notes**

### **Biblical Principle**

_"By wisdom a house is built, and by understanding it is established"_ (Proverbs 24:3)

Building network monitoring requires both technical wisdom (choosing the right tools) and understanding (knowing how to use them effectively).

### **Key Considerations**

- **Security**: Network tools require appropriate permissions
- **Performance**: Avoid overwhelming network with too frequent tests
- **Reliability**: Handle command failures gracefully
- **Scalability**: Design for monitoring multiple networks/devices

### **Current Network Environment**

- **Primary Router**: 192.168.0.1 (excellent 8.6ms response)
- **Network Devices**: 5+ discovered via ARP scanning
- **Network Health**: Stable, 0% packet loss
- **Development Machine**: 192.168.0.136

---

_"Whatever you do, work heartily, as for the Lord and not for men" (Colossians 3:23) - Building network monitoring tools with excellence and purpose._
