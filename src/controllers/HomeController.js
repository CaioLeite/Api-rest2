class HomeController {
  index(req,res){
    res.status(400).json({tudoCerto:true,

    });
  }
}

export default new HomeController();
