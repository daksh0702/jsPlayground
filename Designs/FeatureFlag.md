Functional Requirements
Implement a JS solution for fetching/reading feature flags from an API. How would you improve : performance app and sharing across different apps


class FeatureFlag{
    featureList<Map>:{
        _id:{
            metadata:{
                name: New Feature,
                rolloutPercentage: 50
            }
            status: enabled/disabled,
            whiteListUsers:[],
            expiry: Date
        }
    }

    createAllFeatureList(){

    }

    createFeature(){

    }

    getAllFeatureList(){
        return this.featureList
    }

    getFeatureList(id){
        return
    }

    updateAllFeatureList(){

    }

    updateFeatureList(id){

    }

    deleteAllFeatureList(){

    }

    deleteFeatureList(id){

    }
}

POST /api/v1/feature
request payload {
    status: enabled/disabled,
    whiteListUsers:[],
}

GET /api/v1/features?id
response payload{
    [
        {
            id:
            status: enabled/disabled,
            whiteListUsers:[],
        }
    ]
}

PUT /api/v1/features
request payload {
    [{
        id:
        status: enabled/disabled,
        whiteListUsers:[],
    }]
}

DELETE /api/v1/features
request payload{
    ids:[]
}

How will be clear FeatureList with time?
How will we clear redis cache? (TTL and cron)
A cron job maybe which clears both featureList and redis
- Implement cache invalidation on PUT and DELETE
- Auto Scaling load balancer policies


Non Functional Requirements
- Performance, 
- Caching, 
- Share across different apps