'use strict';

exports.restrict = (req, res, next) => {
  if(req.session.user){
    next();
  }
  else{
    req.session.error = 'Access denied'
    res.status(403).send('Access is denied')
  }
}
