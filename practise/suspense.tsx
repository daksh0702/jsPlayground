// 1. Using lazy
// 2. Using resource wrapper [ can create manually or use react-fetch/ react-query for creating resource wrapper]

const Suspense = () => {
    const createResource = (promise) => {
        let status = 'pending';
        let result;
        const suspender = promise.then(
            (r) => {
            status = 'success';
            result = r;
            },
            (e) => {
            status = 'error';
            result = e;
            }
        );
        
        return {
            read() {
            if (status === 'pending') {
                throw suspender;
            } else if (status === 'error') {
                throw result;
            } else if (status === 'success') {
                return result;
            }
            }
        };
    };

    const fetchData = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve('Data fetched successfully!');
          }, 2000);
        });
      };
      
    const resource = createResource(fetchData());
    const DataFetchingComponent = () => {
        const data = resource.read();
        return <div>{data}</div>;
      };
  return (
    <Suspense fallback={<div>Loading data...</div>}>
        <DataFetchingComponent />
    </Suspense>
  )
}

export default Suspense