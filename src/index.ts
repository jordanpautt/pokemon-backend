import app from './app';
 import './config/database';
app.listen(app.get('port'));
console.log(`Application is running on port ${app.get('port')}`);
