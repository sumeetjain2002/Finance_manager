module.exports=  function clear(req)
    {
        req.session.destroy();           //destroying the session
    }