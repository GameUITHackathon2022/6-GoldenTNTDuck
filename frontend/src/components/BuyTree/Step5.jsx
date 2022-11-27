import React from "react"
import Grid from '@mui/material/Grid'
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Congrats from "../../assets/congrat.png"

const Step5 = () => {
  return (
      <>
        
        <Grid container
          justifyContent="space-evenly"
          spacing={5}
          sx={{ pt: 10 }}
        >
          <img src={Congrats} width="250" alt="congrat"/>
          <Typography variant="h1" sx={{ fontSize: 30, pl: 20, pr: 20, pt: 5, lineHeight: 2, color: "#2d6a4f" }}>
            Cảm ơn bạn đã đóng góp vào công cuộc 
            tạo nên một Trái đất xanh hơn. Chúng tôi sẽ trồng cây
            của bạn trong một khoảng thời gian sắp tới. <br/> Bạn có thể
            theo dõi tiến độ những cây vừa đặt trong trang cá nhân
          </Typography>
          <Button variant="contained" sx={{ ml: 50, bg: "fff"}} onClick={() => { window.location.assign('/dashboard') }}>
            Home
          </Button>
        </Grid>
      </>
  )
}

export default Step5 
