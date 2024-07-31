interface MyType {
    params: {
        name: string
    }
}
function Profile({params: { name }  }: MyType) {
  

    return (
        <div>
            <h1>Profile: {name.toUpperCase()}</h1>
        </div>
    )
}
export default Profile

// colon ❌
// double dot ✅