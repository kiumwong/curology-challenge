import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CircularProgress,
  CardContent,
  Typography,
  CardHeader,
  CardBody,
  Grid,
  Paper,
} from '@material-ui/core';
import FormField from '../components/controls/FormField';

function Product(props) {
  const { handleSubmit } = props;
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 20000);

  return (
    <FormField onSubmit={handleSubmit}>
      <Grid container xs={12} sm={12} md={12}>
        <Paper>
          <CardHeader
            style={{ padding: '10px', backgroundColor: 'rgb(51, 46, 84)', color: '#fff' }}
            title="Magic Potion"
          />
          <Grid container direction="row" justify="space-evenly" alignItems="center">
            <CardActionArea>
              <div className="Product">
                <div className="sketchfab-embed-wrapper">
                  <iframe
                    width={500}
                    height={500}
                    src={
                      'https://sketchfab.com/models/b4e29796cfca4b1d890b876df58a022d/embed?autospin=0.2&amp;autostart=1&amp;transparent=1&amp;preload=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=0&amp;ui_watermark_link=0'
                    }
                    frameborder={0}
                    allow={'autoplay; fullscreen; vr'}
                    mozallowfullscreen={true}
                    webkitallowfullscreen={true}
                  ></iframe>
                </div>
                <div className="Loading">{isLoading ? <CircularProgress /> : null}</div>
              </div>
              <Card>
                <CardContent>
                  <Typography variant="body1" color="primarySecondary" component="p">
                    Revolutionizing the skincare industry and we're ready to unveil it to the world. This product is so
                    different and magical and will work wonders on your skin!
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        </Paper>
      </Grid>
    </FormField>
  );
}

export default Product;
