Design a web / mobile -based messaging app, such as Facebook Messenger.
● The app should support loading the user's past conversation threads on a single page
● The app should support displaying a specific conversation and its past messages
● The app should support sending a new message
Scale the design so that it can support millions or even billions of users.



Functional Requirements

Chat
- User Should be able to chat with contacts, no, group
- User should be able to broadcast message to a group of nos.
- User should be able to send text message, audio note, all kinds of documents
- Attachments should be optimised before sending them.
- User should be able to perform audio call / video call.
- User should be able to see the last online info, currently online/offline
- User should be able to see the status of sent message

Create - Contact, Group, Broadcast
    Group: (Should be a restriction on no of users that can be added to a group like 250)
        - User should have a role i.e admin or user
        - User should be able to add/remove members from group
        - User should be able to edit group settings -> name, profile picture, description
        - User should be able to exit group
        - User should be able to add/remove admin if is admin
    BroadCast:
        - Support unicast for sender, for recevier the message should look as if its coming from user. Receiver should be able to see the list of users to which message is being broadcast


Stories - 

Settings - Profile, Status, Privacy Settings, Backup






Non Functional 
Chats should be end to end encrypted