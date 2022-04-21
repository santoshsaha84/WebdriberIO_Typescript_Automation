export class Settings{

    public setUrls()
    {
        switch(process.env.ENV)
        {
            case "Dev":
                break;
            case  "QA":
                break;
            default:
                console.log("Enter valid value for ENV");
        }
    }

    public setUser()
    {
        switch(process.env.ROLE)
        {
            case "Admin":
                break;
            default:
                console.log("Enter valid value for User ROLE");
        }

    }
}