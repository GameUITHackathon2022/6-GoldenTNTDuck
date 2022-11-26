import React from "react"
import CardPayment from "./CardPayment"
import Grid from '@mui/material/Grid'
import CardPaymentBank from "./CardPaymentBank"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

const Step5 = () => {
  return (
      <>
        
        <Grid container
          justifyContent="space-evenly"
          spacing={5}
          sx={{ pt: 10 }}
        >
          <img src="https://cdn-icons-png.flaticon.com/512/7626/7626666.png" width="200" height="200"/>
          <Typography variant="h1" sx={{ fontSize: 30, pl: 20, pr: 20, pt: 5, lineHeight: 2, color: "#2d6a4f" }}>
            Cảm ơn bạn đã đóng góp vào công cuộc 
            tạo nên một Trái đất xanh hơn. Chúng tôi sẽ trồng cây
            của bạn trong một khoảng thời gian sắp tới. <br/> Bạn có thể
            theo dõi tiến độ những cây vừa đặt trong trang cá nhân
          </Typography>
          <Button variant="contained" sx={{ ml: 50, bg: "fff"}}>
            Home
          </Button>
        </Grid>
      </>
  )
}

export default Step5 
