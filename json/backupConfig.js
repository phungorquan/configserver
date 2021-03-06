var config ={
    "address": "localhost",
    "electronOptions":
    {
        "webPreferences":
        {
            "webviewTag": true
        }
    },
    "port": 8080,
    "ipWhitelist": [],
    "useHttps": false,
    "httpsPrivateKey": "",
    "httpsCertificate": "",
    "language": "vi",
    "timeFormat": 24,
    "units": "metric",
    "modules": [
    {
        "position": "top_center",
        "header": "",
        "module": "clock",
        "config":
        {
            "displayType": "digital",
            "displaySeconds": false,
            "showPeriod": false,
            "showPeriodUpper": false,
            "clockBold": false,
            "showDate": true,
            "showWeek": false,
            "dateFormat": "ddd, DD/MM",
            "lunarShow": true,
            "timeFormat": 24,
            "analogSize": "200px",
            "analogFace": "simple",
            "analogPlacement": "bottom",
            "analogShowDate": "top",
            "secondsColor": "#111111",
            "showSunTimes": false,
            "showMoonTimes": false,
            "lat": 47.630539,
            "lon": -122.344147
        }
    },
    {
        "position": "top_left",
        "header": "",
        "module": "MMM-VietnamCalendar",
        "config":
        {
            "maximumEntries": 7,
            "maximumNumberOfDays": 365,
            "showLocation": true,
            "maxTitleLength": 25,
            "wrapEvents": true,
            "maxTitleLines": 3,
            "fetchInterval": 60000,
            "animationSpeed": 500,
            "displayButton": false,
            "displayEndTime": true,
            "dateEndFormat": "LT(DD/MM)",
            "displayLunarDate": true,
            "displayPersonalEvents": true,
            "defaultColor": "White",
            "lunarColor": "LightGreen",
            "tableClass": "xsmall",
            "displayLunarEvents": true,
            "calendars": [
            {
                "url": "https://calendar.google.com/calendar/ical/anhquantong77%40gmail.com/public/basic.ics",
                "color": "Violet",
                "name": "L???ch c?? nh??n c???a anhquantong77"
            },
            {
                "url": "https://calendar.google.com/calendar/ical/quan.ng0anhin98%40gmail.com/public/basic.ics",
                "color": "PowderBlue",
                "name": "L???ch c?? nh??n c???a quan.ng0anhin98"
            }],
            "personalDateEvent": [
            {
                "day": 7,
                "month": 7,
                "title": "- Sinh nh???t Qu??n"
            }]
        }
    },
    {
        "position": "top_center",
        "module": "MMM-FaceNet",
        "config":
        {
            "streamVideo": true,
            "displayRate": false,
            "updateInterval": 300000,
            "userName":
            {
                "ThayDuy": "Th???y Duy",
                "ThayDuong": "Th???y D????ng",
                "Quan": "Xiu",
                "Khanh": "Kh??nh",
                "Bao": "B???o",
                "BuiPhungHuuDuc": "?????c B??i",
                "ChauMinhDuc": "Ch??u Minh ?????c",
                "Dat": "?????t Phan H???u",
                "Dung": "D??ng",
                "Duy": "Duy Tr???n",
                "Giang": "Giang Tr????ng",
                "Huy": "Ch??? Quang Huy",
                "LAnh": "Lan Anh",
                "Nhu": "Nhu Ng??",
                "Phong": "Void",
                "Quoc": "Qu???c Kim",
                "Tin": "T??n",
                "Van": "V??n V??n"
            }
        }
    },
    {
        "module": "MMM-Cursor"
    },
    {
        "module": "MMM-WS2812",
        "config":
        {
            "initLedMMM": "WS-RAINBOW",
            "allowGA": true,
            "allowGesture": true
        }
    },
    {
        "position": "fullscreen",
        "module": "MMM-Snow",
        "config":
        {
            "flakeCount": 5,
            "theme": "custom",
            "sizeFactor": 7,
            "downwards": true
        }
    },
    {
        "module": "alert",
        "config":
        {
            "effect": "slidefadingdown",
            "alert_effect": "jelly",
            "display_time": 1000,
            "position": "center",
            "welcome_message": false
        }
    },
    {
        "position": "bottom_bar",
        "module": "MMM-News-QR",
        "config":
        {
            "interval": 2000,
            "animationSpeed": 0,
            "colorDark": "#fff",
            "colorLight": "#000",
            "imageSize": 100
        }
    },
    {
        "position": "bottom_bar",
        "module": "newsfeed",
        "config":
        {
            "showSourceTitle": true,
            "showPublishDate": true,
            "showDescription": true,
            "wrapTitle": true,
            "wrapDescription": true,
            "truncDescription": false,
            "lengthDescription": 100,
            "hideLoading": false,
            "reloadInterval": 300000,
            "updateInterval": 10000,
            "animationSpeed": 1500,
            "maxNewsItems": 0,
            "ignoreOldItems": true,
            "ignoreOlderThan": 604800000,
            "logFeedWarnings": false,
            "feeds": [
            {
                "title": "24h",
                "url": "https://cdn.24h.com.vn/upload/rss/tintuctrongngay.rss"
            },
            {
                "title": "VNExpress",
                "url": "https://vnexpress.net/rss/tin-moi-nhat.rss"
            },
            {
                "title": "24h",
                "url": "https://cdn.24h.com.vn/upload/rss/bongda.rss"
            }]
        }
    },
    {
        "module": "currentweather",
        "position": "top_right",
        "header": "",
        "config":
        {
            "location": "Th??nhph???H???Ch??Minh",
            "locationID": "1566083",
            "updateInterval": 600000,
            "animationSpeed": 1000,
            "timeFormat": 24,
            "units": "metric",
            "showPeriod": false,
            "showPeriodUpper": false,
            "showWindDirection": false,
            "showWindDirectionAsArrow": false,
            "useBeaufort": false,
            "appendLocationNameToHeader": true,
            "useKMPHwind": false,
            "decimalSymbol": ".",
            "showHumidity": true,
            "degreeLabel": false,
            "showIndoorTemperature": true,
            "showIndoorHumidity": true,
            "showFeelsLike": false,
            "initialLoadDelay": 0,
            "retryDelay": 2500,
            "roundTemp": true
        }
    },
    {
        "position": "top_right",
        "module": "weatherforecast",
        "header": "",
        "config":
        {
            "location": "Th??nhph???H???Ch??Minh",
            "locationID": "1566083",
            "maxNumberOfDays": 7,
            "showRainAmount": false,
            "updateInterval": 600000,
            "animationSpeed": 1000,
            "decimalSymbol": ".",
            "fade": true,
            "fadePoint": 0.5,
            "colored": true,
            "scale": false,
            "units": "metric",
            "initialLoadDelay": 1000,
            "retryDelay": 2000,
            "appendLocationNameToHeader": true,
            "calendarClass": "calendar",
            "tableClass": "medium",
            "roundTemp": true
        }
    },
    {
        "position": "center",
        "module": "MMM-GoogleAssistant",
        "config":
        {
            "micConfig":
            {
                "recorder": "arecord",
                "device": "plughw:2"
            },
            "snowboy":
            {
                "usePMDL": false,
                "audioGain": 2,
                "Frontend": true,
                "Model": "jarvis",
                "Sensitivity": 0.7
            },
            "A2DServer":
            {
                "useA2D": true,
                "stopCommand": "stop",
                "useYouTube": true,
                "youtubeCommand": "youtube",
                "displayResponse": true
            },
            "recipes": ["myCustomRecipe.js"]
        }
    },
    {
        "position": "top_left",
        "module": "MMM-Assistant2Display"
    },
    {
        "position": "top_left",
        "module": "MMM-Tools",
        "config":
        {
            "refresh_interval_ms": 20000,
            "databaseSave": false
        }
    },
    {
        "position": "top_right",
        "module": "MMM-GroveGestures",
        "config":
        {
            "recognitionTimeout": 1500,
            "visible": true
        }
    },
    {
        "module": "MMM-GoogleDriveSlideShow",
        "position": "bottom",
        "config":
        {
            "rootFolderId": "1j7RLtFiFXFelZjaveD0QUiOWkIqX9LNt",
            "maxFolders": 1,
            "maxResults": 50,
            "refreshDriveDelayInSeconds": 86400,
            "refreshSlideShowIntervalInSeconds": 10,
            "maxWidth": "850",
            "maxHeight": "850",
            "theme": "blackFrame",
            "opacity": 1,
            "debug": false
        }
    },
    {
        "position": "bottom_bar",
        "module": "MMM-page-indicator",
        "config":
        {
            "pages": 3
        }
    },
    {
        "module": "MMM-pages",
        "config":
        {
            "modules": [
                ["MMM-VietnamCalendar", "weatherforecast", "MMM-News-QR", "newsfeed"],
                ["MMM-Tools", "MMM-FaceNet", "currentweather", "MMM-News-QR", "newsfeed"],
                ["MMM-GoogleDriveSlideShow"]
            ],
            "fixed": ["MMM-Snow", "MMM-GroveGestures", "clock", "MMM-Assistant2Display", "MMM-GoogleAssistant", "MMM-pages", "MMM-page-indicator"],
            "animationTime": 500
        }
    }]
};if (typeof module !== 'undefined') module.exports = config;