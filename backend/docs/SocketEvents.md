# SunoHub Socket.IO Events Documentation

## Presence Events

### userOnline
- **Payload:**
  - userId: String
  - nickname: String
  - language: String
  - status: String ("available" | "busy" | "in-call")
- **Action:**
  - Save/update user in ActiveUserPresence
  - Broadcast updated online users list and counts

### updateOnlineStatus
- **Payload:**
  - status: String
- **Action:**
  - Update user's status and lastSeen
  - Broadcast updated online users list and counts

### disconnect
- **Action:**
  - Remove user from ActiveUserPresence
  - Broadcast updated online users list and counts

### onlineUsersUpdated
- **Payload:**
  - total: Number
  - perLanguage: { [language]: Number }
  - users: Array<{ userId, nickname, socketId, language, status, lastSeen }>
- **Action:**
  - Sent to all clients when online users change

---

## Panic & Abuse Events

### panicButtonPressed
- **Payload:**
  - reporterId: String
  - reportedUserId: String
  - callId: String
- **Action:**
  - Save report in DB (type: panic)
  - Emit `panicAlert` to admin dashboard
  - Optionally disconnect both users

### abuseReported
- **Payload:**
  - reporterId: String
  - reportedUserId: String
  - roomId: String (optional)
  - callId: String (optional)
  - reason: String
- **Action:**
  - Save report in DB (type: abuse)
  - Emit `abuseAlert` to admin dashboard
  - Log in admin logs

### panicAlert
- **Payload:**
  - reportId: String
  - reporterId: String
  - reportedUserId: String
  - callId: String
- **Action:**
  - Sent to all admin dashboard sockets

### abuseAlert
- **Payload:**
  - reportId: String
  - reporterId: String
  - reportedUserId: String
  - roomId: String (optional)
  - callId: String (optional)
  - reason: String
- **Action:**
  - Sent to all admin dashboard sockets

### adminReviewAction
- **Payload:**
  - reportId: String
  - action: String ("blockUser" | "closeRoom" | "clearReport")
  - userId: String (optional)
  - roomId: String (optional)
- **Action:**
  - Update report status in DB
  - Execute admin decision in real-time

### reportStatusUpdated
- **Payload:**
  - reportId: String
  - status: String ("open" | "reviewed" | "resolved")
- **Action:**
  - Sent to all admin dashboard sockets when a report status changes 