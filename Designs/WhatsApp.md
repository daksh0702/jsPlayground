Whatsapp

Functional Requirements:
- Chat, Call and VideoCall with users
- show chat message, sent, received and read ticks
- show missed calls(audio/video both)
- Should be able to search across all chat threads, filter chat threads on all, unread, groups
- Put stories, view stories of other users who are my contacts
- All users which are phone contacts should be visible in chat search 
- Should be able to add contact, group, community or broadcast message
- Should be able to use whatsapp on dekstop using whatsapp web
- Settings:
-   Should be able to add/update/remove profile picture, set/update status
-   Privacy settings: 
        1. can other contacts see my online status
        2. can other contacts see my last online
        3. block users
- Authentication - User should be able to login via his phone number/ logout/ switch phone nos
- Users should get notifications


Non functional Requirements:
- Performance - Messages are sent at huge scale and should be received quickly(low latency)
- Scalability & Maintability - Graph of network of users to whom he should be able to communicate quickly. 
- chat - support for sending text, images, documents, files, voice notes.
- Security - E2E message encryption
- Accessibility - give user features to read the messages 
- Platform support - Mobile/ Desktop
- Monitoring - Time taken to send a message, videocall quality, active users, FCP, TTI, TTFB, TBT
- Analytics - How many users are from a given location
- Caching - All the data i.e chats, chat/call history, profile picture, status, settings config - (privacy settings, metadata - current number, previous number)
- Password Protect or not the app
- LOCALIZATION/INTERNATIONALIZATION


Tech Choices:
Mobile App - React native - IOS, Android
Web App - React - QR code authentication -> React shell within which we can run ->,React native web, which allows react native apps to run on web
Disk caching - mobile storage

HLD

LLD
Authentication: 
- signin()
- signout()
- signInWhatsAppWeb()
- signOutWhatsAppWeb()

Business Service:
    Chat:
        readProfile()
        sendMessageWithAttachments(); // media, text, voice notes
        search();
        showImagesAndVideos()
        showDocuments()
        showLinks()
        getMessageStatus([])
        getMessages(from,to) - infinite scroll 


        Calls:
        audioCall([])/videocall([]): socketConnection -
        addUser([])
        removeUser([])
        muteUser([])

        Keypad:
            autoCorrect(query)
            autoComplete(query)
            searchSuggestions(query)
            emojiSuggestions(query)

    For Contacts: CRUD
    - create(),read(), update(), delete()
    For groups/communities: 
    - CRUD, addUser(), removeUser(), getUserWithID(id) |Privileges - Admin - CRUD
    For Broadcast():
        SAME AS ABOVE    
    

    
