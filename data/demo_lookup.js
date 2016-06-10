/**
 *
 * Created by zwhitman on 5/19/2016.
 */

var demo =
    [{"Field":"OBJECTID","Alias":"OBJECTID"},
            {"Field":"GEOID","Alias":"Geographic Identifier"},
            {"Field":"STATE","Alias":"Census 2-digit FIPS State Code"},
            {"Field":"STUSAB","Alias":"State US Postal Abbreviation"},
            {"Field":"COUNTY","Alias":"Census 3-digit FIPS County Code"},
            {"Field":"TRACT","Alias":"Census 6-digit FIPS Tract Code"},
            {"Field":"NAME","Alias":"Tract Name"},
            {"Field":"CNTY_FIPS","Alias":"County FIPS Code"},
            {"Field":"EACODE","Alias":"Bureau of Economic Analysis (BEA) Economic Area Code"},
            {"Field":"EANAME","Alias":"Bureau of Economic Analysis (BEA) Economic Area Name"},
            {"Field":"B03002EST1","Alias":"Total Population"},
            {"Field":"B01001_UNDER17","Alias":"0-17"},
            {"Field":"B01001_UNDER17_PCT","Alias":"Population Age 0-17 as a %"},
            {"Field":"B01001_18TO24","Alias":"18-24"},
            {"Field":"B01001_18TO24_PCT","Alias":"Population Age 18-24 as a %"},
            {"Field":"B01001_25TO64","Alias":"25 - 64"},
            {"Field":"B01001_25TO64_PCT","Alias":"Population 25 - 64 as a %"},
            {"Field":"B01001_ABOVE64","Alias":"65 and over"},
            {"Field":"B01001_ABOVE64_PCT","Alias":"Population 65 and over as a %"},


            //ethnicity
            {"Field":"B03002EST3","Alias":"White"},
            {"Field":"B03002EST3_PCT","Alias":"White alone (not Hispanic) as a %"},
            {"Field":"B03002EST4","Alias":"Black"},
            {"Field":"B03002EST4_PCT","Alias":"Black or African American alone (not Hispanic) as a %"},
            {"Field":"B03002EST5","Alias":"American Indian"},
            {"Field":"B03002EST5_PCT","Alias":"American Indian and Alaska Native alone (not Hispanic) as a %"},
            {"Field":"B03002EST6","Alias":"Asian"},
            {"Field":"B03002EST6_PCT","Alias":"Asian alone (not Hispanic) as a %"},
            {"Field":"B03002EST7","Alias":"Hawaiian"},
            {"Field":"B03002EST7_PCT","Alias":"Native Hawaiian and Other Pacific Islander alone (not Hispanic) as a %"},
            {"Field":"B03002EST8","Alias":"Other race"},
            {"Field":"B03002EST8_PCT","Alias":"Some other race alone (not Hispanic) as a %"},
            {"Field":"B03002TMNH","Alias":"Two or more races"},
            {"Field":"B03002TMNH_PCT","Alias":"Two or more races (not Hispanic) as a %"},
            {"Field":"B03002EST12","Alias":"Hispanic"},
            {"Field":"B03002EST12_PCT","Alias":"Persons of Hispanic Origin as a %"},
            {"Field":"B11005EST1","Alias":"Total Households"},
            {"Field":"B11005EST2","Alias":"Households with one or more people under 18 years:"},
            {"Field":"B11005EST2_PCT","Alias":"Households with one or more people under 18 years: as a %"},
            {"Field":"B11006EST2","Alias":"Households with one or more people 60 years and over:"},
            {"Field":"B11006EST2_PCT","Alias":"Households with one or more people 60 years and over: as a %"},
            {"Field":"B11001EST8","Alias":"Householder living alone"},
            {"Field":"B11001EST8_PCT","Alias":"Householder living alone as a %"},
            {"Field":"B16005EST1","Alias":"Universe of Population 5 Years and Over"},
            {"Field":"B16005NE","Alias":"Population 5 years and over that speak English "},
            {"Field":"B16005NE_PCT","Alias":"Population 5 years and over that speak English "},
            {"Field":"B25010EST1","Alias":"Average Household Size of Occupied Housing Units"},
            {"Field":"B25010EST2","Alias":"Average Household Size of Owner occupied Housing Units"},
            {"Field":"B25010EST3","Alias":"Average Household Size of Renter occupied Housing Units"},
            {"Field":"B15001EST1","Alias":"Total population 18 years or older"},
            {"Field":"AGE_18TO24","Alias":"18 to 24"},
            {"Field":"AGE_25TO34","Alias":"25 to 34"},
            {"Field":"AGE_35TO44","Alias":"35 to 44"},
            {"Field":"AGE_45TO64","Alias":"45 to 64"},
            {"Field":"AGE_65UP","Alias":">65"},


            {"Field":"LT9_18TO24","Alias":"Population Ages 18 to 24 having less than High School education"},
            {"Field":"LT9_18TO24_PCT","Alias":"Population Ages 18 to 24 having less than High School education as a %"},
            {"Field":"HSND_18TO24","Alias":"Population Ages 18 to 24 having some High School education (No Diploma)"},
            {"Field":"HSND_18TO24_PCT","Alias":"Population Ages 18 to 24 having some High School education (No Diploma) as a %"},
            {"Field":"HS_18TO24","Alias":"Population ages 18 to 24 having High School Education"},
            {"Field":"HS_18TO24_PCT","Alias":"Population ages 18 to 24 having High School Education as a %"},
            {"Field":"CND_18TO24","Alias":"Population ages 18 to 24 having some College education (No Degree)"},
            {"Field":"CND_18TO24_PCT","Alias":"Population ages 18 to 24 having some College education (No Degree) as a %"},
            {"Field":"AD_18TO24","Alias":"Population ages 18 to 24 having an Associate's Degree"},
            {"Field":"AD_18TO24_PCT","Alias":"Population ages 18 to 24 having an Associate's Degree as a %"},
            {"Field":"BD_18TO24","Alias":"Population ages 18 to 24 having a Bachelor's Degree"},
            {"Field":"BD_18TO24_PCT","Alias":"Population ages 18 to 24 having a Bachelor's Degree as a %"},
            {"Field":"GD_18TO24","Alias":"Population ages 18 to 24 having a Graduate Degree"},
            {"Field":"GD_18TO24_PCT","Alias":"Population ages 18 to 24 having a Graduate Degree as a %"},
            {"Field":"LT9_25TO34","Alias":"Population ages 25 to 34 having less than High School education"},
            {"Field":"LT9_25TO34_PCT","Alias":"Population ages 25 to 34 having less than High School education as a %"},
            {"Field":"HSND_25TO34","Alias":"Population ages 25 to 34 having some High School education (No Diploma)"},
            {"Field":"HSND_25TO34_PCT","Alias":"Population ages 25 to 34 having some High School education (No Diploma) as a %"},
            {"Field":"HS_25TO34","Alias":"Population ages 25 to 34 having High School education"},
            {"Field":"HS_25TO34_PCT","Alias":"Population ages 25 to 34 having High School education as a %"},
            {"Field":"CND_25TO34","Alias":"Population ages 25 to 34 having some College education (No Degree)"},
            {"Field":"CND_25TO34_PCT","Alias":"Population ages 25 to 34 having some College education (No Degree) as a %"},
            {"Field":"AD_25TO34","Alias":"Population ages 25 to 34 having an Associate's Degree"},
            {"Field":"AD_25TO34_PCT","Alias":"Population ages 25 to 34 having an Associate's Degree as a %"},
            {"Field":"BD_25TO34","Alias":"Population ages 25 to 34 having a Bachelor's Degree"},
            {"Field":"BD_25TO34_PCT","Alias":"Population ages 25 to 34 having a Bachelor's Degree as a %"},
            {"Field":"GD_25TO34","Alias":"Population ages 25 to 34 having a Graduate Degree"},
            {"Field":"GD_25TO34_PCT","Alias":"Population ages 25 to 34 having a Graduate Degree as a %"},
            {"Field":"LT9_35TO44","Alias":"Population Ages 35 to 44 having less than High School education"},
            {"Field":"LT9_35TO44_PCT","Alias":"Population Ages 35 to 44 having less than High School education as a %"},
            {"Field":"HSND_35TO44","Alias":"Population ages 35 to 44 having some High School education (No Diploma)"},
            {"Field":"HSND_35TO44_PCT","Alias":"Population ages 35 to 44 having some High School education (No Diploma) as a %"},
            {"Field":"HS_35TO44","Alias":"Population ages 35 to 44 having High School education"},
            {"Field":"HS_35TO44_PCT","Alias":"Population ages 35 to 44 having High School education as a %"},
            {"Field":"CND_35TO44","Alias":"Population ages 35 to 44 having some College education (No Degree)"},
            {"Field":"CND_35TO44_PCT","Alias":"Population ages 35 to 44 having some College education (No Degree) as a %"},
            {"Field":"AD_35TO44","Alias":"Population ages 35 to 44 having an Associate's Degree"},
            {"Field":"AD_35TO44_PCT","Alias":"Population ages 35 to 44 having an Associate's Degree as a %"},
            {"Field":"BD_35TO44","Alias":"Population ages 35 to 44 having a Bachelor's Degree"},
            {"Field":"BD_35TO44_PCT","Alias":"Population ages 35 to 44 having a Bachelor's Degree as a %"},
            {"Field":"GD_35TO44","Alias":"Population ages 35 to 44 having a Graduate Degree"},
            {"Field":"GD_35TO44_PCT","Alias":"Population ages 35 to 44 having a Graduate Degree as a %"},
            {"Field":"LT9_45TO64","Alias":"Population ages 45 to 64 having less than High School education"},
            {"Field":"LT9_45TO64_PCT","Alias":"Population ages 45 to 64 having less than High School education as a %"},
            {"Field":"HSND_45TO64","Alias":"Population ages 45 to 64 having some High School education (No Diploma)"},
            {"Field":"HSND_45TO64_PCT","Alias":"Population ages 45 to 64 having some High School education (No Diploma) as a %"},
            {"Field":"HS_45TO64","Alias":"Population ages 45 to 64 having High School education"},
            {"Field":"HS_45TO64_PCT","Alias":"Population ages 45 to 64 having High School education as a %"},
            {"Field":"CND_45TO64","Alias":"Population ages 45 to 64 having some College education (No Degree)"},
            {"Field":"CND_45TO64_PCT","Alias":"Population ages 45 to 64 having some College education (No Degree) as a %"},
            {"Field":"AD_45TO64","Alias":"Population ages 45 to 64 having an Associate's Degree"},
            {"Field":"AD_45TO64_PCT","Alias":"Population ages 45 to 64 having an Associate's Degree as a %"},
            {"Field":"BD_45TO64","Alias":"Population ages 45 to 64 having a Bachelor's Degree"},
            {"Field":"BD_45TO64_PCT","Alias":"Population ages 45 to 64 having a Bachelor's Degree as a %"},
            {"Field":"GD_45TO64","Alias":"Population ages 45 to 64 having a Graduate Degree"},
            {"Field":"GD_45TO64_PCT","Alias":"Population ages 45 to 64 having a Graduate Degree as a %"},
            {"Field":"LT9_65UP","Alias":"Population ages 65 and older having less than High School education"},
            {"Field":"LT9_65UP_PCT","Alias":"Population ages 65 and older having less than High School education as a %"},
            {"Field":"HSND_65UP","Alias":"Population ages 65 and older having some High School education (No Diploma)"},
            {"Field":"HSND_65UP_PCT","Alias":"Population ages 65 and older having some High School education (No Diploma) as a %"},
            {"Field":"HS_65UP","Alias":"Population ages 65 and older having High School education"},
            {"Field":"HS_65UP_PCT","Alias":"Population ages 65 and older having High School education as a %"},
            {"Field":"CND_65UP","Alias":"Population ages 65 and older having some College education (No Degree)"},
            {"Field":"CND_65UP_PCT","Alias":"Population ages 65 and older having some College education (No Degree) as a %"},
            {"Field":"AD_65UP","Alias":"Population ages 65 and older having an Associate's Degree"},
            {"Field":"AD_65UP_PCT","Alias":"Population ages 65 and older having an Associate's Degree as a %"},
            {"Field":"BD_65UP","Alias":"Population ages 65 and older having a Bachelor's Degree"},
            {"Field":"BD_65UP_PCT","Alias":"Population ages 65 and older having a Bachelor's Degree as a %"},
            {"Field":"GD_65UP","Alias":"Population ages 65 and older having a Graduate Degree"},
            {"Field":"GD_65UP_PCT","Alias":"Population ages 65 and older having a Graduate Degree as a %"}]
