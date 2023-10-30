interface user{
    [index:string]:string | number | undefined
    userId:string|number,
    username:string,
    message?:string | undefined
}
export default user