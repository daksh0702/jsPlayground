Functional Requirements
Non Functional Requirements
HLD
LLD
Component Design -> Component structure, state, state mutations

API Structure
Future Scope


Non Functional Requirements - Authentication, Performance, Accessibility, Internationalization, Security, Logging & Monitoring, Platforms Supported(Mobile, Tablet, Desktop), Rendering - CSR, Static, SSR, Hybrid, Caching
0. Authentication - Session ID, JWT, OAuth, MFA, Biometric
1. Performance:
    * Fast load times
    * Efficient resource usage
    * Smooth animations and transitions
    * Quick response to user actions
    * Virtual Scroll, pagination
    * Message Compression, Image/Assets compression
1.2 Caching:
    Service Worker
    IndexedDb & other storages
2. Scalability:
    * Ability to handle increasing number of users
    * Efficient handling of large data sets
3. Security:
    * HSTS - HTTP Strict Transport Security header  (Header to be sent by server - [Strict-Transport-Security: max-age=31536000; includeSubDomains; preload]) 
    * Data encryption (e.g., HTTPS)
    * Protection against common web vulnerabilities (e.g., XSS, CSRF)
    * Secure storage of sensitive information
    * DDOS, Rate Limiting, Captcha
    * E2E encryption, private, public key generated on client
    * Content Security Policy(CSP header for all resources)
4. Usability:
    * Intuitive and user-friendly interface
    * Consistent design and layout
    * Clear and helpful error messages
    * Comprehensive user documentation and help
5. Reliability:
    * High availability
    * Minimal downtime
    * Error handling and recovery mechanisms
6. Maintainability:
    * Clean and modular code structure
    * Documentation of code and components
    * Ease of adding new features and fixing bugs
7. Compatibility:
    * Cross-browser compatibility
    * Support for various screen sizes and devices
8. Compliance:
    * Adherence to relevant standards and regulations (e.g., GDPR, ADA)
9. Monitoring and Analytics:
    * Application performance monitoring
    * User behavior tracking and analytics
    * Quantum & new relic + alerts
10. Accessibility:
    * Semantic HTML
    * ARIA labels
    * AOM
    * tabindex / taborder
11. Client Server Interactions:
    * Request Response Model - APIS 
    * Web Sockets
    * Server Sent Events
    * Polling
    * Streaming (using grpc)
    * Push notifications
12. Moderation
Add frame-ancestors Directive: To prevent your app from being embedded in an iframe by malicious sites (Clickjacking attacks) -> Content-Security-Policy: frame-ancestors 'none';
For autocomplete - https://www.youtube.com/watch?v=jVMqj8A7Fpk
Always use a map instead of object because the lookup and insertion complexity for objects is also close to O(1), but objects come with some overhead due to prototype chains and internal optimizations that can slow down performance, especially with a large number of keys.