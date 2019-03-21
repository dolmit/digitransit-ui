const CONFIG = 'estonia';
const API_URL = process.env.API_URL || 'https://dev-api.digitransit.fi';
const GEOCODING_BASE_URL = process.env.GEOCODING_BASE_URL || `${API_URL}/geocoding/v1`;
const MAP_URL =
    process.env.MAP_URL || 'https://digitransit-dev-cdn-origin.azureedge.net';
const APP_PATH = process.env.APP_CONTEXT || '';
const { SENTRY_DSN } = process.env;
const PORT = process.env.PORT || 8080;
const APP_DESCRIPTION = 'Digitransit journey planning UI';
const OTP_TIMEOUT = process.env.OTP_TIMEOUT || 10000; // 10k is the current server default
const YEAR = 1900 + new Date().getYear();

export default {
    SENTRY_DSN,
    PORT,
    CONFIG,
    OTPTimeout: OTP_TIMEOUT,
    URL: {
        API_URL,
        ASSET_URL: process.env.ASSET_URL,
        MAP_URL,
        OTP: process.env.OTP_URL || `${API_URL}/routing/v1/routers/finland/`,
        MAP: {
            default: `${MAP_URL}/map/v1/hsl-map/`,
            sv: `${MAP_URL}/map/v1/hsl-map-sv/`,
        },
        STOP_MAP: `${MAP_URL}/map/v1/estonia-stop-map/`,
        CITYBIKE_MAP: `${MAP_URL}/map/v1/hsl-citybike-map/`,
        ALERTS: process.env.ALERTS_URL || `${API_URL}/realtime/service-alerts/v1`,
        FONT:
            'https://fonts.googleapis.com/css?family=Lato:300,400,900%7CPT+Sans+Narrow:400,700',
        PELIAS: `${process.env.GEOCODING_BASE_URL || GEOCODING_BASE_URL}/search`,
        PELIAS_REVERSE_GEOCODER: `${process.env.GEOCODING_BASE_URL ||
        GEOCODING_BASE_URL}/reverse`,
        ROUTE_TIMETABLES: {
            HSL: `${API_URL}/timetables/v1/hsl/routes/`,
        },
    },

    APP_PATH: `${APP_PATH}`,
    title: 'Reittihaku',

    textLogo: false,
    // Navbar logo
    logo: 'default/digitransit-logo.png',

    contactName: {
        sv: 'Digitransit',
        fi: 'Digitransit',
        default: "Digitransit's",
    },

    // Default labels for manifest creation
    name: 'Digitransit beta',
    shortName: 'Digitransit',

    searchParams: {},
    feedIds: [],

    defaultMapCenter: {
        lat: 59.43724,
        lon: 24.74546,
    },

    realTime: {
        /* sources per feed Id */
        HSL: {
            mqtt: 'wss://mqtt.hsl.fi',
            routeSelector: function selectRoute(routePageProps) {
                const route = routePageProps.route.gtfsId.split(':');
                return route[1];
            },
        },
    },

    // Google Tag Manager id
    GTMid: 'GTM-PZV2S2V',

    /*
   * by default search endpoints from all but gtfs sources, correct gtfs source
   * figured based on feedIds config variable
   */
    searchSources: ['oa', 'osm'],

    search: {
        suggestions: {
            useTransportIcons: false,
        },
        usePeliasStops: false,
        mapPeliasModality: false,
        peliasMapping: {},
        peliasLayer: null,
        peliasLocalization: null,
        minimalRegexp: new RegExp('.{2,}'),
    },

    nearbyRoutes: {
        radius: 10000,
        bucketSize: 1000,
    },

    defaultSettings: {
        accessibilityOption: 0,
        bikeSpeed: 5,
        minTransferTime: 120,
        optimize: 'QUICK',
        preferredRoutes: [],
        ticketTypes: null,
        transferPenalty: 0,
        unpreferredRoutes: [],
        walkBoardCost: 600,
        walkReluctance: 2,
        walkSpeed: 1.2,
    },

    /**
     * These are used for dropdown selection of values to override the default
     * settings. This means that values ought to be relative to the current default.
     * If not, the selection may not make any sense.
     */
    defaultOptions: {
        walkBoardCost: {
            least: 3600,
            less: 1200,
            more: 360,
            most: 120,
        },
        walkReluctance: {
            least: 5,
            less: 3,
            more: 1,
            most: 0.2,
        },
    },

    quickOptions: {
        public_transport: {
            availableOptionSets: [
                'least-transfers',
                'least-walking',
                'public-transport-with-bicycle',
                'saved-settings',
            ],
        },
        walk: {
            availableOptionSets: ['prefer-walking-routes', 'saved-settings'],
        },
        bicycle: {
            availableOptionSets: [
                'least-elevation-changes',
                'prefer-greenways',
                'saved-settings',
            ],
        },
        car_park: {
            availableOptionSets: [
                'least-transfers',
                'least-walking',
                'saved-settings',
            ],
        },
    },

    maxWalkDistance: 10000,
    maxBikingDistance: 100000,
    itineraryFiltering: 1.5, // drops 66% worse routes
    availableLanguages: ['fi', 'sv', 'en', 'fr', 'nb', 'de', 'et'],
    defaultLanguage: 'et',
    // This timezone data will expire on 31.12.2020
    timezoneData:
        'Europe/Helsinki|EET EEST|-20 -30|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 ' +
        'WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5',

    mainMenu: {
        // Whether to show the left menu toggle button at all
        show: true,
        showDisruptions: true,
        showLoginCreateAccount: true,
        showOffCanvasList: true,
    },

    itinerary: {
        // How long vehicle should be late in order to mark it delayed. Measured in seconds.
        delayThreshold: 180,
        // Wait time to show "wait leg"? e.g. 180 means over 3 minutes are shown as wait time.
        // Measured in seconds.
        waitThreshold: 180,
        enableFeedback: false,

        timeNavigation: {
            enableButtonArrows: false,
        },

        showZoneLimits: false,
    },

    nearestStopDistance: {
        maxShownDistance: 5000,
    },

    map: {
        useRetinaTiles: true,
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        maxZoom: 18,
        controls: {
            zoom: {
                // available controls positions: 'topleft', 'topright', 'bottomleft, 'bottomright'
                position: 'bottomleft',
            },
            scale: {
                position: 'bottomright',
            },
        },
        genericMarker: {
            // Do not render name markers at zoom levels below this value
            nameMarkerMinZoom: 18,

            popup: {
                offset: [106, 16],
                maxWidth: 250,
                minWidth: 250,
            },
        },

        line: {
            halo: {
                weight: 7,
                thinWeight: 4,
            },

            leg: {
                weight: 5,
                thinWeight: 2,
            },

            passiveColor: '#758993',
        },

        useModeIconsInNonTileLayer: false,
    },

    stopCard: {
        header: {
            showDescription: true,
            showStopCode: true,
            showDistance: true,
            showZone: false,
        },
    },

    autoSuggest: {
        // Let Pelias suggest based on current user location
        locationAware: true,
    },

    cityBike: {
        // Config for map features. NOTE: availability for routing is controlled by
        // transportModes.citybike.availableForSelection
        showCityBikes: true,
        showStationId: true,

        useUrl: {
            fi: 'https://www.hsl.fi/kaupunkipyorat',
            sv: 'https://www.hsl.fi/sv/stadscyklar',
            en: 'https://www.hsl.fi/en/citybikes',
        },

        cityBikeMinZoom: 14,
        cityBikeSmallIconZoom: 14,
        // When should bikeshare availability be rendered in orange rather than green
        fewAvailableCount: 3,
    },
    // Lowest level for stops and terminals are rendered
    stopsMinZoom: 13,
    // Highest level when stops and terminals are still rendered as small markers
    stopsSmallMaxZoom: 14,
    // Highest level when terminals are still rendered instead of individual stops
    terminalStopsMaxZoom: 17,
    terminalStopsMinZoom: 12,
    terminalNamesZoom: 16,
    stopsIconSize: {
        small: 8,
        selected: 28,
        default: 18,
    },

    appBarLink: { name: 'Digitransit', href: 'https://www.digitransit.fi/' },

    colors: {
        primary: '#00AFFF',
    },

    sprites: 'svg-sprite.default.svg',

    disruption: {
        showInfoButton: true,
    },

    agency: {
        show: true,
    },

    socialMedia: {
        title: 'Digitransit',
        description: APP_DESCRIPTION,
        locale: 'en_US',

        image: {
            url: '/img/default-social-share.png',
            width: 2400,
            height: 1260,
        },

        twitter: {
            card: 'summary_large_image',
            site: '@hsldevcom',
        },
    },

    meta: {
        description: APP_DESCRIPTION,
        keywords: 'digitransit',
    },

    // Ticket information feature toggle
    showTicketInformation: false,
    useTicketIcons: false,
    showRouteInformation: false,

    modeToOTP: {
        bus: 'BUS',
        tram: 'TRAM',
        rail: 'RAIL',
        subway: 'SUBWAY',
        citybike: 'BICYCLE_RENT',
        airplane: 'AIRPLANE',
        ferry: 'FERRY',
        walk: 'WALK',
        bicycle: 'BICYCLE',
        car: 'CAR',
        car_park: 'CAR_PARK',
        public_transport: 'WALK',
    },

    // Control what transport modes that should be possible to select in the UI
    // and whether the transport mode is used in trip planning by default.
    transportModes: {
        bus: {
            availableForSelection: true,
            defaultValue: true,
        },

        tram: {
            availableForSelection: true,
            defaultValue: true,
        },

        rail: {
            availableForSelection: true,
            defaultValue: true,
        },

        subway: {
            availableForSelection: true,
            defaultValue: true,
        },

        airplane: {
            availableForSelection: true,
            defaultValue: true,
        },

        ferry: {
            availableForSelection: true,
            defaultValue: true,
        },

        citybike: {
            availableForSelection: false, // TODO: Turn off in autumn
            defaultValue: false, // always false
        },
    },

    streetModes: {
        public_transport: {
            availableForSelection: true,
            defaultValue: true,
            exclusive: false,
            icon: 'bus-withoutBox',
        },

        walk: {
            availableForSelection: true,
            defaultValue: false,
            exclusive: true,
            icon: 'walk',
        },

        bicycle: {
            availableForSelection: true,
            defaultValue: false,
            exclusive: true,
            icon: 'bicycle-withoutBox',
        },

        car: {
            availableForSelection: true,
            defaultValue: false,
            exclusive: true,
            icon: 'car-withoutBox',
        },

        car_park: {
            availableForSelection: false,
            defaultValue: false,
            exclusive: false,
            icon: 'car_park-withoutBox',
        },
    },

    accessibilityOptions: [
        {
            messageId: 'accessibility-nolimit',
            displayName: 'Ei rajoitusta',
            value: '0',
        },
        {
            messageId: 'accessibility-limited',
            displayName: 'Liikun pyörätuolilla',
            value: '1',
        },
    ],

    moment: {
        relativeTimeThreshold: {
            seconds: 55,
            minutes: 59,
            hours: 23,
            days: 26,
            months: 11,
        },
    },

    customizeSearch: {
        walkReluctance: {
            available: true,
        },

        walkBoardCost: {
            available: true,
        },

        transferMargin: {
            available: true,
        },

        walkingSpeed: {
            available: true,
        },

        ticketOptions: {
            available: true,
        },

        accessibility: {
            available: true,
        },
        transferpenalty: {
            available: true,
        },
    },

    areaPolygon: [
        [26.61469, 57.50470],
        [26.58588, 57.51295],
        [26.55831, 57.50903],
        [26.49830, 57.51976],
        [26.46701, 57.57043],
        [26.40182, 57.56724],
        [26.32764, 57.57453],
        [26.27128, 57.59355],
        [26.24342, 57.61788],
        [26.22716, 57.64596],
        [26.20907, 57.66184],
        [26.17494, 57.68523],
        [26.19624, 57.71501],
        [26.14036, 57.72891],
        [26.13363, 57.74647],
        [26.08130, 57.76096],
        [26.04992, 57.75700],
        [26.01646, 57.76882],
        [26.05285, 57.84374],
        [26.02004, 57.84123],
        [25.99943, 57.85396],
        [25.96255, 57.84091],
        [25.88673, 57.84224],
        [25.85708, 57.85248],
        [25.81759, 57.86064],
        [25.78129, 57.90257],
        [25.73689, 57.91895],
        [25.70484, 57.89858],
        [25.67777, 57.89954],
        [25.67337, 57.90810],
        [25.64643, 57.91220],
        [25.63618, 57.92617],
        [25.57757, 57.94012],
        [25.58660, 57.95753],
        [25.57807, 57.96751],
        [25.55719, 57.95544],
        [25.51742, 57.96254],
        [25.48373, 57.97029],
        [25.43946, 57.99246],
        [25.45394, 58.00727],
        [25.44643, 58.01248],
        [25.36153, 58.02698],
        [25.29453, 58.07647],
        [25.27035, 58.06251],
        [25.30834, 58.03623],
        [25.30253, 57.98825],
        [25.25458, 57.98914],
        [25.25128, 57.99872],
        [25.22717, 58.01165],
        [25.21466, 58.02885],
        [25.21147, 58.05686],
        [25.19900, 58.06340],
        [25.19140, 58.07102],
        [25.11040, 58.07317],
        [25.10694, 58.06158],
        [25.07879, 58.06138],
        [25.02172, 58.01303],
        [24.94979, 58.00439],
        [24.83364, 57.96711],
        [24.80688, 57.98529],
        [24.74751, 57.97770],
        [24.74649, 57.96084],
        [24.71666, 57.95751],
        [24.69322, 57.94154],
        [24.67282, 57.95423],
        [24.65055, 57.95416],
        [24.62770, 57.93692],
        [24.58554, 57.95640],
        [24.54405, 57.93991],
        [24.51453, 57.92592],
        [24.46458, 57.92019],
        [24.45634, 57.91188],
        [24.46440, 57.90765],
        [24.45829, 57.89823],
        [24.46350, 57.87686],
        [24.41154, 57.85955],
        [24.40544, 57.86703],
        [24.35473, 57.86996],
        [23.23031, 57.49764],
        [22.67558, 57.82371],
        [21.66951, 57.69501],
        [20.85166, 59.01126],
        [23.21828, 59.56751],
        [26.45342, 59.99705],
        [27.82958, 59.61906],
        [28.11155, 59.45067],
        [28.14163, 59.42363],
        [28.19842, 59.40175],
        [28.21311, 59.38583],
        [28.21426, 59.36772],
        [28.13395, 59.28680],
        [28.06781, 59.28867],
        [27.95935, 59.26718],
        [27.90774, 59.23752],
        [27.90522, 59.20624],
        [27.89151, 59.18068],
        [27.86741, 59.15659],
        [27.81233, 59.12574],
        [27.81430, 59.10510],
        [27.79343, 59.08997],
        [27.79663, 59.06782],
        [27.77767, 59.05580],
        [27.77174, 59.02971],
        [27.74969, 59.02498],
        [27.75083, 58.98401],
        [27.74136, 58.97426],
        [27.51016, 58.74290],
        [27.57565, 58.33422],
        [27.51513, 58.30815],
        [27.49466, 58.22503],
        [27.59330, 58.12265],
        [27.63869, 58.09982],
        [27.61076, 58.05393],
        [27.62064, 58.01336],
        [27.63645, 58.01286],
        [27.65051, 58.02170],
        [27.65688, 58.02090],
        [27.70300, 58.00131],
        [27.70118, 57.98574],
        [27.68652, 57.97598],
        [27.68843, 57.95698],
        [27.72063, 57.92439],
        [27.75626, 57.90782],
        [27.76222, 57.90052],
        [27.81856, 57.89986],
        [27.82397, 57.89104],
        [27.81957, 57.85871],
        [27.79798, 57.83680],
        [27.74194, 57.82283],
        [27.68648, 57.83022],
        [27.63470, 57.83578],
        [27.55929, 57.82660],
        [27.55843, 57.81171],
        [27.53973, 57.79060],
        [27.51761, 57.77457],
        [27.52990, 57.76080],
        [27.55033, 57.73447],
        [27.52886, 57.70563],
        [27.50035, 57.70148],
        [27.46181, 57.70223],
        [27.38277, 57.66828],
        [27.38986, 57.65630],
        [27.40531, 57.63540],
        [27.40959, 57.61128],
        [27.37956, 57.59142],
        [27.32998, 57.57610],
        [27.35767, 57.52696],
        [27.35206, 57.51293],
        [27.27946, 57.53256],
        [27.25786, 57.54563],
        [27.19381, 57.54560],
        [27.10042, 57.56100],
        [27.08362, 57.57180],
        [27.03159, 57.58060],
        [27.02915, 57.58740],
        [26.97226, 57.60002],
        [26.94440, 57.59793],
        [26.93519, 57.60743],
        [26.94011, 57.61494],
        [26.92380, 57.62829],
        [26.90774, 57.62812],
        [26.86818, 57.61160],
        [26.86456, 57.58796],
        [26.83481, 57.57792],
        [26.80340, 57.57840],
        [26.77837, 57.55529],
        [26.75118, 57.55803],
        [26.74933, 57.56495],
        [26.76119, 57.57247],
        [26.74267, 57.57469],
        [26.73258, 57.56460],
        [26.67447, 57.55027],
        [26.64983, 57.54875],
        [26.61992, 57.52694],
        [26.62174, 57.50798],
        [26.61469, 57.50470],
    ],

    // Minimun distance between from and to locations in meters. User is noticed
    // if distance is less than this.
    minDistanceBetweenFromAndTo: 20,

    // If certain mode(s) only exist in limited number of areas, listing the areas as a list of polygons for
    // selected mode key will remove the mode(s) from queries if no coordinates in the query are within the polygon(s).
    // This reduces complexity in finding routes for the query.
    modePolygons: {},

    footer: {
        content: [
            { label: `© HSL, Traficom ${YEAR}` },
            {},
            {
                name: 'footer-feedback',
                nameEn: 'Submit feedback',
                href: 'https://github.com/HSLdevcom/digitransit-ui/issues',
                icon: 'icon-icon_speech-bubble',
            },
            {
                name: 'about-this-service',
                nameEn: 'About this service',
                route: '/tietoja-palvelusta',
                icon: 'icon-icon_info',
            },
        ],
    },

    // Default origin endpoint to use when user is outside of area
    defaultEndpoint: {
        address: 'Helsinki-Vantaan Lentoasema',
        lat: 60.317429,
        lon: 24.9690395,
    },
    defaultOrigins: [
        {
            icon: 'icon-icon_airplane',
            label: 'Helsinki-Vantaan lentoasema',
            lat: 60.317429,
            lon: 24.9690395,
        },
        {
            icon: 'icon-icon_ferry',
            label: 'Turun satama',
            lat: 60.436363,
            lon: 22.220002,
        },
        {
            icon: 'icon-icon_airplane',
            label: 'Rovaniemen lentoasema',
            lat: 66.557326,
            lon: 25.828135,
        },
    ],

    availableRouteTimetables: {},

    routeTimetableUrlResolver: {},

    aboutThisService: {
        fi: [
            {
                header: 'Tietoja palvelusta',
                paragraphs: [
                    'Palvelu kattaa joukkoliikenteen, kävelyn, pyöräilyn ja yksityisautoilun rajatuilta osin. Palvelu perustuu Digitransit-palvelualustaan.',
                ],
            },
            {
                header: 'Digitransit-palvelualusta',
                paragraphs: [
                    'Digitransit-palvelualusta on HSL:n ja Traficomin kehittämä avoimen lähdekoodin reititystuote.',
                ],
            },
            {
                header: 'Tietolähteet',
                paragraphs: [
                    'Kartat, tiedot kaduista, rakennuksista, pysäkkien sijainnista ynnä muusta tarjoaa © OpenStreetMap contributors. Osoitetiedot tuodaan Väestörekisterikeskuksen rakennustietorekisteristä. Joukkoliikenteen reitit ja aikataulut ladataan Traficomin valtakunnallisesta joukkoliikenteen tietokannasta.',
                ],
            },
        ],

        sv: [
            {
                header: 'Om tjänsten',
                paragraphs: [
                    'Reseplaneraren täcker med vissa begränsningar kollektivtrafik, promenad, cykling samt privatbilism. Tjänsten baserar sig på Digitransit-plattformen.',
                ],
            },
            {
                header: 'Digitransit-plattformen',
                paragraphs: [
                    'Digitransit-plattformen är en öppen programvara utvecklad av HRT och Traficom.',
                ],
            },
            {
                header: 'Datakällor',
                paragraphs: [
                    'Kartor, gator, byggnader, hållplatser och dylik information erbjuds av © OpenStreetMap contributors. Addressinformation hämtas från BRC:s byggnadsinformationsregister. Kollektivtrafikens rutter och tidtabeller hämtas från Traficoms landsomfattande kollektivtrafiksdatabas.',
                ],
            },
        ],

        en: [
            {
                header: 'About this service',
                paragraphs: [
                    'The service covers public transport, walking, cycling, and some private car use. Service is built on Digitransit platform.',
                ],
            },
            {
                header: 'Digitransit platform',
                paragraphs: [
                    'The Digitransit service platform is an open source routing platform developed by HSL and Traficom.',
                ],
            },
            {
                header: 'Data sources',
                paragraphs: [
                    "Maps, streets, buildings, stop locations etc. are provided by © OpenStreetMap contributors. Address data is retrieved from the Building and Dwelling Register of the Finnish Population Register Center. Public transport routes and timetables are downloaded from Traficom's national public transit database.",
                ],
            },
        ],
        nb: {},
        fr: {},
        de: {},
    },

    staticMessages: [],

    themeMap: {
        estonia: 'estonia',
        hsl: 'reittiopas',
        turku: '(turku|foli)',
        lappeenranta: 'lappeenranta',
        joensuu: 'joensuu',
        oulu: 'oulu',
        hameenlinna: 'hameenlinna',
        matka: 'matka',
        rovaniemi: 'rovaniemi',
        kouvola: 'kouvola',
        tampere: 'tampere',
        mikkeli: 'mikkeli',
        kotka: 'kotka',
        jyvaskyla: 'jyvaskyla',
        lahti: 'lahti',
        kuopio: 'kuopio',
    },

    minutesToDepartureLimit: 9,

    imperialEnabled: false,
    // this flag when true enables imperial measurements  'feet/miles system'

    mapLayers: {
        featureMapping: {
            ticketSales: {},
        },
    },

    routeTimetables: {},
};
