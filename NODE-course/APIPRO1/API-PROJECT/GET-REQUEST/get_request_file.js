const data1 = require("../data/linkData.json");
const data2 = require("../data/linkData-2.json");

class API {
  static actionDecoder(url) {
    //checking url
    if (url == "/video") {
      //statuscode ok
      return [{ status: "ok", msg: "server is live" }];
    }

    if (url == "/video/links") {
      return API.getLinks();
    }

    if (url == "/video/titles") {
      return API.getTitleOnly();
    }

    if (url == "/video/full") {
      return API.getFullDetailed();
    }
    if (url == "/video/tags") {
      return API.getCategorys();
    }
  }

  static getLinks() {
    //extracting link from file
    const linkFound = data1;
    const made = new Array();

    linkFound.forEach((obj) => {
      made.push({
        id: `"${obj.Id}"`,
        title: `"${obj.Title}"`,
        link: `"${obj.LinkVideo}"`,
      });
    });

    linkFound.push({ status: "end" });
    return made;
  }

  static getTitleOnly() {
    //file to titlefound
    const titleFound = data1;
    const titlemadeobj = new Array();

    //traversing while getting titles and id
    titleFound.forEach((title) => {
      titlemadeobj.push({ id: `"${title.Id}"`, title: `"${title.Title}"` });
    });

    //pushing into array obj to be return
    titlemadeobj.push({ status: "end" });
    return titlemadeobj;
  }

  static getFullDetailed() {
    //file to videos
    const videos = data1;
    const madeobj = new Array();

    //traversing to reorganized data fetched
    videos.forEach((video) => {
      //making object key values
      let objV = {
        id: `"${video.Id}"`,
        title: `"${video.Title}"`,
        link: `"${video.LinkVideo}"`,
        duration: `"${video.Duration}`,
        quality: `"${video.Quality}"`,
        thumbnail: `"${video.ThumbImage}"`,
        type: `"${video.Type}"`,
      };
      //insert into into array to be return
      madeobj.push(objV);
    });
    return madeobj;
  }

  static getCategorys() {
    // assign data1 from file into category
    const category = data1;
    let categorymade = new Array();

    //foreach collection category only
    category.forEach((cate) => {
      const temp = cate.Category;
      let flag = 0;
      let place = 0;

      //category object is traversed
      for (let i = 0; i < temp[`subtitle-${place}`].length; i++) {
        if (temp[`subtitle-${i}`] != null) {
          for (let j = 0; j < categorymade.length; j++) {
            //check if made list has already same element flag become 1
            if (categorymade[j] == temp[`subtitle-${i}`]) {
              flag = 1;
            }
          }

          //if flag is 0 then current element get push into category
          if (flag == 0) {
            categorymade.push(temp[`subtitle-${i}`]);
          } else {
            flag = 0;
          }
        }
      }
      place++;
    });

    return categorymade;
  }
}

class searchEngine {
  static searchById(id) {
    const datain = data1;
    const datain2 = data2;

    let foundVideos = new Array();

    datain.forEach((video) => {
      //check for id match
      if (video.Id == id) {
        let f = {
          id: `"${video.Id}"`,
          title: `"${video.Title}"`,
          link: `"${video.LinkVideo}"`,
          duration: `"${video.Duration}`,
          quality: `"${video.Quality}"`,
          thumbnail: `"${video.ThumbImage}"`,
          type: `"${video.Type}"`,
        };
        foundVideos.push(f);
      }
    });

    datain2.forEach((video) => {
      //check for id match
      if (video.Id == id) {
        let f = {
          id: `"${video.Id}"`,
          title: `"${video.Title}"`,
          link: `"${video.LinkVideo}"`,
          duration: `"${video.Duration}`,
          quality: `"${video.Quality}"`,
          thumbnail: `"${video.ThumbImage}"`,
          type: `"${video.Type}"`,
        };
        foundVideos.push(f);
      }
    });
    return foundVideos;
  }

  static searchByTitle(titlein) {
    const datain = data1;
    const datain2 = data2;
    
    let em = ' ';
    let titlemade = ' ';
    let list = titlein.split("%20");
    list.forEach(li => {
        titlemade +=li+em;
    })
    
    titlein = titlemade.trim();
    let foundVideos = new Array();

    datain.forEach((video) => {
      //check for id match
      if (video.Title == titlein) {
        let f = {
          id: `"${video.Id}"`,
          title: `"${video.Title}"`,
          link: `"${video.LinkVideo}"`,
          duration: `"${video.Duration}`,
          quality: `"${video.Quality}"`,
          thumbnail: `"${video.ThumbImage}"`,
          type: `"${video.Type}"`,
        };
        foundVideos.push(f);
      }
    });

    datain2.forEach((video) => {
      //check for id match
      if (video.Title == titlein) {
        let f = {
          id: `"${video.Id}"`,
          title: `"${video.Title}"`,
          link: `"${video.LinkVideo}"`,
          duration: `"${video.Duration}`,
          quality: `"${video.Quality}"`,
          thumbnail: `"${video.ThumbImage}"`,
          type: `"${video.Type}"`,
        };
        foundVideos.push(f);
      }
    });
    return foundVideos;
  }

}

module.exports = {
  API,
  searchEngine,
};
