const { Octokit } = require("@octokit/rest")
const { Base64 } = require("js-base64")
const fs = require("fs")
import { useRouter } from 'next/router'

require("dotenv").config()

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
})
    
//to upload file by providing just hash as we are naming the file with hash
export default async function handler(req, res) {
    try {
        //set as header and send whatever the hash u r sending
        const filePath="/home/rachana/file4"
        const content = fs.readFileSync(filePath, "utf-8")
        const contentEncoded = Base64.encode(content)
        const hash=String("file.txt")
    
        const { data } = await octokit.repos.createOrUpdateFileContents({
          // replace the owner and email with your own details
          owner: "manjularachana",
          repo: "githubApiUsageToUploadDownload",
          path: hash,
          message: "feat: Added OUTPUT.md programatically",
          content: contentEncoded,
        })
    console.log({data})
    res.status(200).json({data})
      } catch (err) {
        console.error(err)
      }
}
//import Link from 'next/link'
//export default ({ url: { query: { name } } }) => (
  //  <p>Welcome to About! { name }</p>
  //)