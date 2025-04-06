var express = require('express');
var axios = require('axios')
var router = express.Router();

/* GET users listing. */
// router.get('/game',(req,res)=>{
  // res.set('Access-Control-Allow-Origin', '*');
  // res.json(colors)
// })
// router.use(bodyParser.json());
router.use(express.json());
router.use(express.urlencoded({
  extended: false
}));

router.post('/', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    console.log(req.body);
    var postData = req.body;
    console.log(postData);
    if (postData == {}) {return}
      var response = await axios({
        method: 'get',
        url: postData,
        // url: `https://www.jigsawexplorer.com/`,
        withCredentials: false,
        // params: {
          // access_token: SECRET_TOKEN,
        // },
      });
      res.send(response.data);
      // console.log(response.data)
  // } catch (error) {
  //     res.status(500).send('Error fetching iframe content');
  // }
});
module.exports = router;
