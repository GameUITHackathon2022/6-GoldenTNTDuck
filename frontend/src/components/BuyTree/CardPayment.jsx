
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';

export default function CardPayment() {
  return (
    <Card
      variant="outlined"
      row
      sx={{
        width: 720,
        height: 250,
        gap: 2,
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 200, height: 200 }}>
        <img
          src="https://static.mservice.io/img/momo-upload-api-220418155002-637858938029609599.png"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <div>
        <Typography level="h1" fontSize="lg" id="card-description" mb={0.5} sx={{ fontSize: 40 }}>
          Momo
        </Typography>
        <Typography level="h1" fontSize="lg" id="card-description" mb={0.5} sx={{ fontSize: 25 }}>
          Chủ tài khoản: Đỗ Hoàng Cường
        </Typography>
        <Typography level="h1" fontSize="lg" id="card-description" mb={0.5} sx={{ fontSize: 25 }}>
          Số điện thoại: 0123456789
        </Typography>
        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
        </Typography>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: 'none' }}
        >
          Nội dung chuyển tiền: email SO_TIEN_THANH_TOAN
        </Chip>
      </div>
    </Card>
    );
}
