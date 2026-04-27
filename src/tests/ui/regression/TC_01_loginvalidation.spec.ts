import test from '@playwright/test'
import Login  from '../../../capabilities/login/Login'
import loginCreds from '../../../testdata/loginTestData.json'
test("login validation", async ({ page },testInfo) => {
    await test.step("Launch Google", async () => {
      let loginObj=new Login(page)
      await loginObj.loginToApplication({username:loginCreds.validCredentials.username,password:loginCreds.validCredentials.password})
    console.log("Login validation test executed successfully")
    })
    

    
})