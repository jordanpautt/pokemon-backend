import app from './app';
app.listen(app.get('port'));
console.log(`Application is running on port ${app.get('port')}`);
