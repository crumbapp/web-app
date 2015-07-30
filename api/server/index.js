import express from 'express';

/* * Create Express Server * */
const app = express();

app.set('port', process.env.PORT || 5000);
app.server = app.listen(app.get('port'), () => {
  console.log('Listening on port %d', app.get('port'));
});

export default app;