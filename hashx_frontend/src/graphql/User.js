localStorage.setItem('firstName' , 'foo')
export const userData = {
    username: 'foobar',
    firstName: localStorage.getItem('firstName'),
    lastName: 'bar'
}; 