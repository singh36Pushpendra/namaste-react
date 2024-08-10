import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items ->
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - image
 *      - Name of res, star rating, cuisine, delivery time etc...
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/png;base64,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"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Name</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Inline style is not a prefered way.
// We should give style as a js object.
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const {resData} = props;
  const { name, cuisines, costForTwo, cloudinaryImageId, avgRating, sla: { deliveryTime } } = resData.info;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img className="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
          + cloudinaryImageId} alt="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

// How restaurant data come?
// Come in form of json.

const resList = [
  {
    "info": {
      "id": "393840",
      "name": "Chinese Wok",
      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
      "locality": "Chikka Lakshmaiah Layout",
      "areaName": "Adugodi",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "Asian",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 4.2,
      "parentId": "61955",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 5.6,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "5.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-11 02:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹199"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chinese-wok-chikka-lakshmaiah-layout-adugodi-bangalore-393840",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "23818",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
      "locality": "Bull Temple Road",
      "areaName": "Basavanagudi",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "2456",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-11 02:59:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.0",
          "ratingCount": "5K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dominos-pizza-bull-temple-road-basavanagudi-bangalore-23818",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "286078",
      "name": "Home Plate by EatFit",
      "cloudinaryImageId": "1d578bb732e03c6f591790eb7d2d88e2",
      "locality": "2nd Stage",
      "areaName": "BTM Layout",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Home Food",
        "Healthy Food",
        "Indian",
        "Punjabi",
        "South Indian",
        "Rajasthani",
        "Maharashtrian",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.1,
      "parentId": "301197",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 7.5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "7.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-11 02:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/home-plate-by-eatfit-2nd-stage-btm-layout-bangalore-286078",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "65797",
      "name": "Leon's - Burgers & Wings (Leon Grill)",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_65797.jpg",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "American",
        "Snacks",
        "Turkish",
        "Portuguese",
        "Continental"
      ],
      "avgRating": 4.5,
      "parentId": "371281",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 5.6,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "5.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-11 04:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.4",
          "ratingCount": "1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "77949",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_77949.JPG",
      "locality": "Gandhi Bazar",
      "areaName": "Basavanagudi",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.3,
      "parentId": "166",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-11 05:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-gandhi-bazar-basavanagudi-bangalore-77949",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "43836",
      "name": "McDonald's",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fe11ced6-89a3-4080-8610-3c743a3bb3f0_43836.jpg",
      "locality": "MG Road",
      "areaName": "Ashok Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "630",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 2.6,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-11 02:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "347868",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/37dc9e37-386f-453b-a219-ffa2c154750b_347868.JPG",
      "locality": "Cunnigham road",
      "areaName": "Vasanth Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
      "avgRating": 4.3,
      "parentId": "547",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 4.2,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-11 03:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-cunnigham-road-vasanth-nagar-bangalore-347868",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "755276",
      "name": "La Pino'z Pizza",
      "cloudinaryImageId": "f44bc9708c514cd2dd6ae0d8b4677214",
      "locality": "Coles Road",
      "areaName": "Frazer Town",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "4961",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 5.5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "5.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-11 02:30:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-coles-road-frazer-town-bangalore-755276",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "10892",
      "name": "Pizza Hut",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/b7a44079-4da0-44f4-95c8-5e5f58b7a082_10892.jpg",
      "locality": "Vani Vilas Road",
      "areaName": "Basavanagudi",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4.1,
      "parentId": "721",
      "avgRatingString": "4.1",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 41,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-11 04:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹189"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-vani-vilas-road-basavanagudi-bangalore-10892",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "41105",
      "name": "Nandhini Deluxe",
      "cloudinaryImageId": "zmp84ckarixkz73fzuws",
      "locality": "Kadubisanahalli",
      "areaName": "Basavanagudi",
      "costForTwo": "₹550 for two",
      "cuisines": [
        "Andhra",
        "Chinese"
      ],
      "avgRating": 4.4,
      "parentId": "2451",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-11 02:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.9",
          "ratingCount": "1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/nandhini-deluxe-kadubisanahalli-basavanagudi-bangalore-41105",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "568703",
      "name": "Baking Bad - Pizza Delivery",
      "cloudinaryImageId": "75052e31499c23c43505cf1a601a2640",
      "locality": "Indiranagar",
      "areaName": "Indiranagar",
      "costForTwo": "₹650 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.4,
      "parentId": "521053",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 6.8,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "6.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-11 04:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹199"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.3",
          "ratingCount": "5K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/baking-bad-pizza-delivery-indiranagar-bangalore-568703",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "578378",
      "name": "Burgerama",
      "cloudinaryImageId": "1d52387b37dbec1712d0142aec3421a6",
      "locality": "2nd  Stage",
      "areaName": "Indiranagar",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Fast Food",
        "American",
        "Beverages"
      ],
      "avgRating": 4.2,
      "parentId": "8993",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 6.8,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "6.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-11 04:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹199"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burgerama-2nd-stage-indiranagar-bangalore-578378",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "711748",
      "name": "Salad Days",
      "cloudinaryImageId": "cfa1123ebf17413dc7d0a80c7361fab3",
      "locality": "Sarvagna Nagar",
      "areaName": "Indiranagar",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Salads",
        "Healthy Food",
        "Beverages"
      ],
      "avgRating": 4.6,
      "parentId": "796",
      "avgRatingString": "4.6",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 7.1,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "7.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-11 03:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/salad-days-sarvagna-nagar-indiranagar-bangalore-711748",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "45871",
      "name": "Subway",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/2/7be3a12e-774c-4f07-8af8-040ff306975c_45871.jpg",
      "locality": "Brigade Road",
      "areaName": "Central Bangalore",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Fast Food",
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "2",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-11 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/subway-brigade-road-central-bangalore-bangalore-45871",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "74444",
      "name": "Samosa Party",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/3de49675-5a5a-470e-a30b-0eef986793d0_74444.jpg",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "Fast Food",
        "Snacks",
        "Beverages",
        "Chaat",
        "North Indian",
        "Street Food",
        "Sweets",
        "Desserts",
        "Punjabi",
        "Bakery"
      ],
      "avgRating": 4.4,
      "parentId": "6364",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 5.7,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "5.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-17 00:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.8",
          "ratingCount": "100+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/samosa-party-koramangala-bangalore-74444",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "392828",
      "name": "Big Bowl",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_392828.JPG",
      "locality": "Chikka Lakshmaiah Layout",
      "areaName": "Adugodi",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "434792",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 39,
        "lastMileTravel": 5.6,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "5.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-11 02:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹199"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/big-bowl-chikka-lakshmaiah-layout-adugodi-bangalore-392828",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "831197",
      "name": "Pastas By Pizza Hut",
      "cloudinaryImageId": "dce75bf0d124fb1fa390597828d8ffd9",
      "locality": "Vani Vilas Road",
      "areaName": "Basavanagudi",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pastas"
      ],
      "avgRating": 3.8,
      "parentId": "306806",
      "avgRatingString": "3.8",
      "totalRatingsString": "10+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-11 02:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pastas-by-pizza-hut-vani-vilas-road-basavanagudi-bangalore-831197",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "751353",
      "name": "Tim Hortons",
      "cloudinaryImageId": "26c8263d346b308a6a62c003d1d9eca1",
      "locality": "8TH BLOCK",
      "areaName": "KORAMANGALA",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Coffee",
        "Cafe",
        "Beverages",
        "Desserts",
        "sandwich",
        "Fast Food"
      ],
      "avgRating": 4.4,
      "parentId": "258236",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-11 04:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/tim-hortons-8th-block-koramangala-bangalore-751353",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "800051",
      "name": "Vital Bowls - Salads & more",
      "cloudinaryImageId": "63a3c2a8873eb3e8d5c86f68defd5370",
      "locality": "Central Hall",
      "areaName": "Seshadripuram",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Healthy Food",
        "Salads",
        "Beverages",
        "Keto"
      ],
      "avgRating": 4.1,
      "parentId": "478149",
      "avgRatingString": "4.1",
      "totalRatingsString": "10+",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 4.5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "4.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-11 03:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/vital-bowls-salads-and-more-central-hall-seshadripuram-bangalore-800051",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "354531",
      "name": "Burger Seigneur",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/20/fb9fc92c-c4df-443f-9c51-7134c8b7e26e_354531.jpg",
      "locality": "St. Marks Road",
      "areaName": "St. Marks Road",
      "costForTwo": "₹1200 for two",
      "cuisines": [
        "American",
        "Continental",
        "Beverages"
      ],
      "avgRating": 4.5,
      "parentId": "12095",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-11 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹199"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.3",
          "ratingCount": "1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-seigneur-st-marks-road-bangalore-354531",
      "type": "WEBLINK"
    }
  }
]
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* Restaurant Card */}
        {
          // not using keys (not acceptable) <<<<< index as key <<<<< unique id (best practice recommended)
          resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
        }
        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};
// top level component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
