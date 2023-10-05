import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
import Spinner from './Spinner'

const News = (props)=>{
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState([])
    let [Articles, setArticles] = useState([])
    let rand=1;
    let text=props.text
    let apiKey=props.apiKey
    let [toFill,setToFill]=useState("")
    const capitalizeFirstLowercaseRest = str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      };
    const updateNews = async ()=> {
        

        console.log(`/${props.text}`)
        {setToFill(props.searchBool?capitalizeFirstLowercaseRest(text):capitalizeFirstLowercaseRest(props.category))}
        
        setArticles([])
        setLoading(true)
        props.setShowpro(true)
        props.setProgress(15);
        let url=!props.searchBool?`https://newsapi.org/v2/everything?q=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`:`https://newsapi.org/v2/everything?q=${props.text}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`
        props.setProgress(20)

       await axios.get(url).then(res=>{
            console.log("got data",res.data)
            props.setProgress(80)
            setArticles(res.data.articles)
            setTotalResults(res.data.totalResults)
            setPage(page+1)
            console.log(totalResults);
            setLoading(false);
            props.setProgress(100);
            props.setShowpro(false);
            
        })
        .catch(err=>{
            console.log(err)
        })

        // fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=09619932d6364e0c857431d0f54231e7&page=${page}&pageSize=${props.pageSize}`)
        // .then((response)=>{
        //     return response.json();
        // }).then((data)=>{
        //     let arr=data.articles
        //     setArticles(arr);
        //     setTotalResults(data.totalResults)
        //     setPage(page+1)
        // })

        // console.log(Articles)
    }
    const fetchMoreData=async()=>
    {
     setLoading(true)   
        console.log("fetching")
        let url=!props.searchBool?`https://newsapi.org/v2/everything?q=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`:`https://newsapi.org/v2/everything?q=${props.text}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`
        axios.get(url).then(res=>{
        // console.log(res.data.articles)
        setArticles(Articles.concat(res.data.articles))
        setPage(page+1)
        setLoading(false)
    })
        .catch(err=>{
            console.log(err)
        })
    }


    useEffect(() => {
        updateNews(); 
        
    }, [props.category,text])


  
 
        return (
            <>

                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>{toFill}</h1>
                {/* {loading&&<Spinner/>} */}
                <InfiniteScroll
                    dataLength={Articles.length}
                    next={fetchMoreData}
                    hasMore={Articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
          
                       <div className="container">

   <div className="row">
   
                        {Articles.map((element) => {
                            return <div className="col-md-4" key={rand++}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 

                    
                         </InfiniteScroll>
                         {Articles.length===totalResults&&<div className="cont text-center my-5 mx-5 text-muted">
                            <h4>YOU'VE REACHED THE END OF THE INTERNET</h4>
                         </div>}
                   
            </>
        )
                    }
    



News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News





// {"status":"ok","totalResults":38,"articles":[{"source":{"id":null,"name":"Hindustan Times"},"author":"HT Sports Desk","title":"India vs Australia Live 3rd T20I: SKY show ends, Kohli, Pandya in the middle - Hindustan Times","description":"India vs Australia 3rd T20 Live Score: The visitors have pulled things back somewhat as the match heads for a dramatic finish. Follow live score and updates of IND vs AUS 3rd T20I from Hyderabad here.","url":"https://www.hindustantimes.com/cricket/india-vs-australia-live-score-3rd-t20-2022-ind-vs-aus-today-cricket-match-latest-scorecard-at-hyderabad-101664105566477.html","urlToImage":"https://images.hindustantimes.com/img/2022/09/25/1600x900/India-Australia-Cricket-69_1664121924504_1664121924504_1664121956666_1664121956666.jpg","publishedAt":"2022-09-25T16:36:19Z","content":"India vs Australia Live: India full squad\r\nKL Rahul, Rohit Sharma(c), Virat Kohli, Suryakumar Yadav, Hardik Pandya, Dinesh Karthik, Rishabh Pant(w), Axar Patel, Harshal Patel, Jasprit Bumrah, Yuzvend… [+90 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Sports Desk","title":"PAK vs ENG 4th T20 Live Score Updates: England two down chasing 167 - The Indian Express","description":"Pakistan vs England Live Score Updates: Pakistan look to bounce back in series against England tonight.","url":"https://indianexpress.com/article/sports/cricket/pak-vs-eng-4th-t20-live-score-updates-8172286/","urlToImage":"https://images.indianexpress.com/2022/09/pak-vs-eng.jpg","publishedAt":"2022-09-25T16:26:09Z","content":"Pakistan Squad: Mohammad Rizwan(w), Babar Azam(c), Haider Ali, Shan Masood, Iftikhar Ahmed, Khushdil Shah, Mohammad Nawaz, Usman Qadir, Haris Rauf, Mohammad Hasnain, Shahnawaz Dahani, Naseem Shah, Mo… [+326 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"Huge Rajasthan Congress Crisis As 90+ Team Gehlot MLAs Threaten To Quit - NDTV","description":"The question of the next Rajasthan Chief Minister has turned into a full-blown crisis for the Congress. Over 90 MLAs of the Ashok Gehlot camp are in protest mode and have gone to meet the Speaker, claiming they want to resign.","url":"https://www.ndtv.com/india-news/sachin-pilot-to-meet-ashok-gehlot-key-congress-meet-to-begin-shortly-3376600","urlToImage":"https://c.ndtvimg.com/2022-09/hch1n8f8_ashok-gehlot_650x400_25_September_22.jpg","publishedAt":"2022-09-25T16:23:00Z","content":"<li>Told that a mass resignation will bring down the government, an MLA said, \"We want Ashok Gehlot as the Chief Minister\", indicating that they are expecting concessions from the Central leadership … [+2509 chars]"},{"source":{"id":null,"name":"Moneycontrol"},"author":"Sunil Shankar Matkar","title":"Trade setup for Monday: Top 15 things to know before the opening bell - Moneycontrol","description":"Based on the open interest future percentage, there were 108 stocks in which a short build-up was seen include Nifty Financial, Power Grid Corporation of India, M&amp;M Financial Services, Vodafone Idea, and Bank Nifty","url":"https://www.moneycontrol.com/news/business/markets/trade-setup-for-monday-top-15-things-to-know-before-the-opening-bell-11-9228911.html","urlToImage":"https://images.moneycontrol.com/static-mcnews/2022/09/stocks_sensex_nifty_stockmarket2-1-770x433.jpg","publishedAt":"2022-09-25T15:48:28Z","content":"The market extended losses for a third consecutive session on September 23, with the benchmark indices falling 1.7 percent as rising recession fears amid expectations of aggressive policy tightening … [+9846 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"HT News Desk","title":"Mukul Rohatgi says no to Modi govt's offer to return as attorney general - Hindustan Times","description":"Earlier reports had suggested that Mukul Rohatagi would take over the AG's role from October 1. Rohatgi was the country's attorney general from June 2014 to June 2017. | Latest News India","url":"https://www.hindustantimes.com/india-news/mukul-rohatgi-says-no-to-modi-govt-s-offer-to-return-as-attorney-general-101664119879174.html","urlToImage":"https://images.hindustantimes.com/img/2022/09/25/1600x900/94e44ea8-3520-11ed-ae53-04438ab0d081_1663265152890_1664120309464_1664120309464.jpg","publishedAt":"2022-09-25T15:39:05Z","content":"Senior advocate Mukul Rohatgi has withdrawn his consent to take over as the attorney general of India. Earlier reports had suggested that he would take over the AG's role from October 1. Rohatgi was … [+1100 chars]"},{"source":{"id":null,"name":"Livemint"},"author":"Livemint","title":"Amazon Great Indian Festival Sale 2022: Deals on premium smartwatches | Mint - Mint","description":"This year, the Amazon festive sale will last eight days and will continue till September 30. Buyers will also get a chance to redeem Amazon diamonds for cash back rewards in the sale. Bank offers during the sale include 10% instant discount on purchases made …","url":"https://www.livemint.com/technology/gadgets/amazon-great-indian-festival-sale-2022-deals-on-premium-smartwatches-11664114106182.html","urlToImage":"https://images.livemint.com/img/2022/09/25/600x338/dims_1_1664115579663_1664115579828_1664115579828.jpg","publishedAt":"2022-09-25T14:22:20Z","content":"Amazon Great Indian Festival Sale 2022 has entered its third day. This means that interested buyers can get their hands on the exclusive deals being offered on various smartphones, TVs, computer peri… [+2658 chars]"},{"source":{"id":null,"name":"DNA India"},"author":"DNA Web Team","title":"Flipkart Big Billion Days 2022 sales: Get HP, Asus and other laptops for less than Rs 40,000 - DNA India","description":"Flipkart Big Billion Days: Flipkart is now giving 10% discounts on purchases made using ICICI Bank and Axis Bank credit cards.","url":"https://www.dnaindia.com/business/report-flipkart-big-billion-days-2022-sales-get-hp-asus-and-other-laptops-for-less-than-rs-40000-2987977","urlToImage":"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/25/2541459-laptops.jpg","publishedAt":"2022-09-25T14:03:00Z","content":"Reported By:| Edited By: DNA Web Team |Source: DNA Web Desk |Updated: Sep 25, 2022, 07:49 PM ISTFlipkart Big Billion Days: The yearly festive season sale at Flipkart has begun. The online retailer is… [+2242 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"Kanishka Singharia","title":"Rakhi Sawant responds to Hema Malini's poll jibe: ‘If tea seller can become PM…’ - Hindustan Times","description":"Rakhi Sawant, sharing a clip on Instagram, thanked the PM for putting the key responsibility on her and considering her worthy of “the role”. | Latest News India","url":"https://www.hindustantimes.com/india-news/rakhi-sawant-responds-to-hema-malini-s-poll-jibe-if-tea-seller-can-become-pm-101664109395707.html","urlToImage":"https://images.hindustantimes.com/img/2022/09/25/1600x900/Rakhi_Sawant_reacts_to_Hema_Malini_1664107997248_1664112785733_1664112785733.jpeg","publishedAt":"2022-09-25T13:59:07Z","content":"Actor Rakhi Sawant on Sunday said she will contest the 2024 general election, adding that when Narendra Modi could become the Prime Minister, then there is no reason why she cannot become a chief min… [+1372 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"At Meeting With Lalu Yadav, Nitish Kumar, Sonia Gandhi's Big Suggestion - NDTV","description":"Congress chief Sonia Gandhi today asked Bihar allies -- Chief Minister Nitish Kumar and Rashtriya Janata Dal chief Lalu Yadav -- to take forward the opposition unity project after the internal elections of the Congress.","url":"https://www.ndtv.com/india-news/sonia-gandhi-tells-lalu-yadav-nitish-kumar-to-meet-again-after-congress-president-election-to-work-on-opposition-unity-3376436","urlToImage":"https://c.ndtvimg.com/2022-09/22606rb_lalu-yadav-nitish-kumar-_625x300_25_September_22.jpg","publishedAt":"2022-09-25T13:59:00Z","content":"New Delhi: Bihar Chief Mnister Nitish Kumar -- the self-appointed interlocuter of the opposition -- met Sonia Gandhi in Delhi today with Bihar ally Lalu Yadav in a strong message of the importance of… [+1803 chars]"}]}