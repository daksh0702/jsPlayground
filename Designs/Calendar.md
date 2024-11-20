Functional Requirements:

1. User should be able to have multiple views i.e daywise view, weekly view, monthwise view, yearly view.
2. User should be able to jump across all these views.
3. User should be able to schedule, view, modify, delete events across dates and time intervals.
4. User should be able to set reminders for an event, set an alarm on a given day at a given time.
5. User should be able to see list of holidays based on region in india.(Update, delete)
6. User should be able to set recuring events

Event:
    1. Should have a title, description, date, timeInterval.
    2. If a video meeting:
        - video meeting link, participants invited, participants invitation status: accepted/declined/Yet to confirm, metadata - pre meet notes, agenda, 
        - Ability to share the invites via link
        - Modify the participant list i.e add, remove
        - User should be able to send reminders and reason if event is modified(rescheduled or deleted)
        - Ability to add meeting room with a single click


Non Functional Requirements:
Platform support - Web/Mobile app
App is going to work online or offline or it could be hybrid - works offline and syncs when online.
Online or hybrid - We will need authentication mechanism.
Offline - we don't need authentication and can only support event 1.

Scalibility 
Accessibility 
Performance
internationalization/localisation
security 
Authentication -  OAuth or backend service -> Cookie, JWTs
Monitoring -> new relic
Analytics

HLD

LLD

Year{
    ListOfMonths:[Month*12]
}

Month{
    ListOfDays:[Day]
}

Day{
    date:,
    events:[
        {
            isRunningFromPrevDay: true/false,
            isRunningToNextDay: true/false,
            category: ['reminder','holiday','meeting']
            fromTime: ''
            toTime: '',
            title: '',
            description:'',
            ?videoMetada:{
                 meetingLink:'', 
                 participantsList:[
                    {
                        uid:
                        invitationStatus: accepted/declined/Yet to confirm
                        declinedReason: ''
                    }
                 ]
                 metadata:{
                    agenda: ''
                    meetingNotes:''
                 }
            }
        }
    ]
}

get ListOfMonths(year)
get ListOfYears(fromYear, toYear)
get ListOfDays(fromDate, toDate)
get AllEvents(fromDate, toDate)


Component Design

<header>
    <nav></nav>
    <sidebar></sidebar>
</header>
<Main>
    <Year>
        <Month>
            <Day></Day>
            <!-- All the days in month -->
        </Month>
        <!-- All the months in a year -->
    </Year>
    <!-- All the years we want to show in a row  -->
</Main>
<footer></footer>


API Structure
get /api/year?fromYear=year1&toYear=year2
get /api/month?fromMonth=month1&toMonth=month2 
get /api/days?fromDate=date1&toDate=date2
get /api/events?fromDate=date1&toDate=date2
post /api/event
{
    days:[
        {date:,
        events:[
            {
                isRunningFromPrevDay: true/false,
                isRunningToNextDay: true/false,
                category: ['reminder','holiday','meeting']
                fromTime: ''
                toTime: '',
                title: '',
                description:'',
                ?videoMetada:{
                    meetingLink:'', 
                    participantsList:[
                        {
                            uid:
                            invitationStatus: accepted/declined/Yet to confirm
                            declinedReason: ''
                        }
                    ]
                    metadata:{
                        agenda: ''
                        meetingNotes:''
                    }
                }
            }
    ]
    }]
}

put /api/event
{
    days:[
        {date:,
        events:[
            {
                isRunningFromPrevDay: true/false,
                isRunningToNextDay: true/false,
                category: ['reminder','holiday','meeting']
                fromTime: ''
                toTime: '',
                title: '',
                description:'',
                ?videoMetada:{
                    meetingLink:'', 
                    participantsList:[
                        {
                            uid:
                            invitationStatus: accepted/declined/Yet to confirm
                            declinedReason: ''
                        }
                    ]
                    metadata:{
                        agenda: ''
                        meetingNotes:''
                    }
                }
            }
    ]
    }]
}
get /api/meeting

Future Scope:
Integrate AI for Scheduling: Use AI to suggest optimal meeting times.
Enhanced Analytics: Provide detailed insights into user behavior and event patterns.
Third-Party Integrations: Integrate with popular services like Google Calendar, Microsoft Outlook.
Allow default view for user: day, weekly, monthly, yearly.
Advanced search across events to quickly find events

