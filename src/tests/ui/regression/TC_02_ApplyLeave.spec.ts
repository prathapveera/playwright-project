import test from '@playwright/test'
import Login  from '../../../capabilities/login/Login'
import loginCreds from '../../../testdata/loginTestData.json'
import LeaveTab from '../../../capabilities/leave/Leave'
test("login validation", async ({ page },testInfo) => {
    await test.step("Launch Google", async () => {
      let loginObj=new Login(page)
      await loginObj.loginToApplication({username:loginCreds.validCredentials.username,password:loginCreds.validCredentials.password})
      
      let leaveTabObj=new LeaveTab(page)
      await leaveTabObj.applyLeave()
      await leaveTabObj.clickMyLeave()
     console.log("Login validation test executed successfully")
    })
    

    
})