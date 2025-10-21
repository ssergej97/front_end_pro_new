import {Alert, Button, Spinner} from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import {fetchData} from "../utils/api.js";
import {useState} from "react";
import CustomTable from "../components/CustomTable/CustomTable";
import nameNormalizer from "../utils/nameNormalizer.js";
import {useNavigate} from "react-router-dom";


const UsersList = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const loadUsers = async () => {
        setLoading(true)
        let data = null;

        try {
            data = await fetchData('/users')
        } catch (error) {
            console.log(error)
            setIsError(true)
        } finally {
            setLoading(false)
        }


        setUsers(data)
        console.log(data)
    }

    const getHeaders = (users, excludeKeys) => {
         const headers = Object.keys(users[0]).reduce((acc, item) => {
            if(!excludeKeys.includes(item)) {
                acc.push(nameNormalizer(item))
            }

            return acc
        }, [])

        headers.push('Controls')
        return headers;
    }

    const getContents = (users, excludeKeys) => {
        const contents = users.map(user => {
            const userData = Object.keys(user).reduce((acc, item) => {
                if(!excludeKeys.includes(item)) {
                    acc.push(user[item])
                }

                return acc
            }, [])

            userData.push(<div className="d-flex gap-2">
                <Button onClick={() => navigate(`${userData[0]}`)} variant={"primary"} size={'sm'}>Edit</Button>
                <Button variant={"danger"} size={'sm'}>Delete</Button>
            </div>  )

            return userData
        })
        return contents;
    }

    return (
        <div>
            <PageHeader
                title={'Users List'}
                LeftControl={() => <Button variant={'success'} onClick={loadUsers}>Upload users</Button>}
            />

            {!users &&
                <Alert variant={'secondary'} className="text-center">
                    Please press "Upload users" button to upload users from API.
                </Alert>
            }

            {loading ? <Alert variant={'warning'} className="text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Alert> : null}


            {isError ? <Alert variant={'danger'} className="text-center">Error while loading data</Alert> : null}

            {users ? <div className="content">
                <CustomTable
                    responsive="lg"
                    variant="secondary"
                    headers={getHeaders(users, ['address', 'company', 'username'])}
                    content={getContents(users, ['address', 'company', 'username'])}
                />
            </div> : null}

        </div>
    );
};

export default UsersList;
