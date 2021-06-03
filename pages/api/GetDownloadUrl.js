const { Octokit } = require("@octokit/rest")
const { Base64 } = require("js-base64")
const fs = require("fs")

require("dotenv").config()

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
})
const main2=async(str)=>{

}
export default async function handler(req, res){
        //uncomment this
        
        //   const router = useRouter()
        //   const {path} = router.queryreturn(<div>{id}</div>)
        //   const {data}=main1(path)
        try{
            const filename="file3.txt"//assign as str
            const {data}=await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
                owner: 'manjularachana',
                repo: 'githubApiUsageToUploadDownload',
                path: filename
              })
              console.log(data.html_url)
              res.status(200).json(data.html_url)
            }
             catch (err) {
            console.error(err)
            }
          } 
  
 