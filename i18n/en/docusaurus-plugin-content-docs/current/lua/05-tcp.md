# TCP/UDP

> Different versions of controllers, plugins, and upper computers support different Lua API commands. Developers can view the specific supported Lua APIs in the "Application" menu of DobotStudio Pro, under the "Script Programming" command sidebar.

This document provides an overview of the functions used for TCP and UDP communication, including how to create network objects, establish connections, read data, and send data.

## Instruction List

The following table summarizes the functions available for TCP and UDP communication:

| Command      | Function                                     |
| ------------ | -------------------------------------------- |
| `TCPCreate`  | Create a TCP network object                  |
| `TCPStart`   | Establish a TCP connection                   |
| `TCPRead`    | Receive data sent by the TCP peer            |
| `TCPWrite`   | Send data to the TCP peer                    |
| `TCPDestroy` | Disconnect TCP connection and destroy socket |
| `UDPCreate`  | Create a UDP network object                  |
| `UDPRead`    | Receive data sent by the UDP peer            |
| `UDPWrite`   | Send data to the UDP peer                    |

## TCP Functions

### `TCPCreate`

**Prototype:**

```lua
TCPCreate(isServer, IP, port)
```

**Description:**
Creates a TCP network object. Only one instance can be created.

### Required Parameters:

- **isServer**: Boolean indicating if a server is being created (`true` for server, `false` for client).
- **IP**: Server IP address. Must be in the same subnet and not conflict with the client IP address. For the server, use the robot's IP; for the client, use the peer's address.
- **port**: Server port. Avoid using certain reserved ports as listed below.

### Reserved Ports:

- **Avoid these ports:** 7, 13, 22, 37, 139, 445, 502, 503, and others within the range of 0-1024 (commonly occupied by the system).

### Return Values:

- **err**: `0` indicates success, `1` indicates failure.
- **socket**: The created socket object.

### Example:

```lua
-- Creating a TCP server.
local ip = "192.168.5.1"  -- Robot's IP as server IP
local port = 6001          -- Server port
local err, socket = TCPCreate(true, ip, port)

-- Creating a TCP client.
local ip = "192.168.5.25"  -- External device's IP as server IP
local port = 6001          -- Server port
local err, socket = TCPCreate(false, ip, port)
```

### `TCPStart`

**Prototype:**

```lua
TCPStart(socket, timeout)
```

**Description:**
Establishes a TCP connection. The robot acts as a server waiting for a client connection, or as a client attempting to connect to a server.

### Required Parameters:

- **socket**: The created socket object.
- **timeout**: Waiting timeout in seconds. `0` means wait indefinitely until the connection is established.

### Return Values:

- Connection results:
  - `0`: Connection successful
  - `1`: Invalid parameters
  - `2`: Socket object does not exist
  - `3`: Invalid timeout setting
  - `4`: Connection failed

### Example:

```lua
-- Start establishing TCP connection, wait until connected.
err = TCPStart(socket, 0)  -- socket is the object from TCPCreate
```

### `TCPRead`

**Prototype:**

```lua
TCPRead(socket, timeout, type)
```

**Description:**
Receives data sent by the TCP peer.

### Required Parameters:

- **socket**: The created socket object.

### Optional Parameters:

- **timeout**: Waiting timeout in seconds. If not set or less than or equal to 0, it will wait until data is read. If greater than 0, it will proceed after the timeout.
- **type**: Return value type. Default is `"table"`; if set to `"string"`, data is returned as a string.

### Return Values:

- **err**: `0` indicates success, `1` indicates failure.
- **RecBuf**: The received data buffer.

### Example:

```lua
-- Receive TCP data as both string and table.
err, RecBuf = TCPRead(socket, 0, "string")  -- RecBuf as string
err, RecBuf = TCPRead(socket, 0)              -- RecBuf as table
```

### `TCPWrite`

**Prototype:**

```lua
TCPWrite(socket, buf, timeout)
```

**Description:**
Sends data to the TCP peer.

### Required Parameters:

- **socket**: The created socket object.
- **buf**: The data to send.

### Optional Parameter:

- **timeout**: Waiting timeout in seconds. If not set or `0`, waits until the data is fully sent.

### Return Values:

- **err**: `0` indicates success, `1` indicates failure.

### Example:

```lua
-- Send TCP data with content "test".
TCPWrite(socket, "test")  -- socket is the object from TCPCreate
```

### `TCPDestroy`

**Prototype:**

```lua
TCPDestroy(socket)
```

**Description:**
Disconnects the TCP connection and destroys the socket object.

### Required Parameter:

- **socket**: The created socket object.

### Return Values:

- **result**:
  - `0`: Success
  - `1`: Failure

### Example:

```lua
-- Disconnect from the TCP peer.
TCPDestroy(socket)  -- socket is the object from TCPCreate
```

## UDP Functions

### `UDPCreate`

**Prototype:**

```lua
UDPCreate(isServer, IP, port)
```

**Description:**
Creates a UDP network object. Only one instance can be created.

### Required Parameters:

- **isServer**: Boolean indicating if a server is being created (`true` for server, `false` for client).
- **IP**: The IP address for both server and client, must be in the same subnet and not conflict with the robot’s IP.
- **port**:
  - For the server, this is the port used by both local and peer.
  - For the client, this is the peer's port, and the local will use a random port.

### Return Values:

- **err**: `0` indicates success, `1` indicates failure.
- **socket**: The created socket object.

### Example:

```lua
-- Creating a UDP server.
local ip = "192.168.5.25"  -- External device's IP
local port = 6001          -- Port used for both ends
local err, socket = UDPCreate(true, ip, port)

-- Creating a UDP client.
local ip = "192.168.5.25"  -- External device's IP
local port = 6001          -- Peer port
local err, socket = UDPCreate(false, ip, port)
```

### `UDPRead`

**Prototype:**

```lua
UDPRead(socket, timeout, type)
```

**Description:**
Receives data sent by the UDP peer.

### Required Parameter:

- **socket**: The created socket object.

### Optional Parameters:

- **timeout**: Waiting timeout in seconds. If not set or less than or equal to 0, it waits until data is read; if > 0, it proceeds after the timeout.
- **type**: Return value type. Default is `"table"`; if set to `"string"`, data is returned as a string.

### Return Values:

- **err**: `0` indicates success, `1` indicates failure.
- **RecBuf**: The received data buffer.

### Example:

```lua
-- Receive UDP data as both string and table.
err, RecBuf = UDPRead(socket, 0, "string")  -- RecBuf as string
err, RecBuf = UDPRead(socket, 0)              -- RecBuf as table
```

### `UDPWrite`

**Prototype:**

```lua
UDPWrite(socket, buf, timeout)
```

**Description:**
Sends data to the UDP peer.

### Required Parameters:

- **socket**: The created socket object.
- **buf**: The data to send.

### Optional Parameter:

- **timeout**: Waiting timeout in seconds. If not set or `0`, waits until the data is fully sent.

### Return Values:

- **err**: `0` indicates success, `1` indicates failure.

### Example:

```lua
-- Send UDP data with content "test".
UDPWrite(socket, "test")  -- socket is the object from UDPCreate
```
