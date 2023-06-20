import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable, Modal, ScrollView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from "formik";
import FormField from "./FormField";
import { validationSchema } from "./validation";
import { styles } from "../config/styles";
import ServicesStyles from '../config/services.styles';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-paper';
// import CalendarPicker from 'react-native-calendar-picker';

const countryData = [
      {
        key: 1,
        label: 'Afghanistan',
        value: 'Afghanistan'
      },
      {
        key: 2,
        label: 'Aland Islands',
        value: 'Aland Islands'
      },
      {
        key: 3,
        label: 'Albania',
        value: 'Albania'
      },
      {
        key: 4,
        label: 'Algeria',
        value: 'Algeria'
      },
      {
        key: 5,
        label: 'American Samoa',
        value: 'American Samoa'
      },
      {
        key: 6,
        label: 'Andorra',
        value: 'Andorra'
      },
      {
        key: 7,
        label: 'Angola',
        value: 'Angola'
      },
      {
        key: 8,
        label: 'Anguilla',
        value: 'Anguilla'
      },
      {
        key: 9,
        label: 'Antarctica',
        value: 'Antarctica'
      },
      {
        key: 10,
        label: 'Antigua and Barbuda',
        value: 'Antigua and Barbuda'
      },
      {
        key: 11,
        label: 'Argentina',
        value: 'Argentina'
      },
      {
        key: 12,
        label: 'Armenia',
        value: 'Armenia'
      },
      {
        key: 13,
        label: 'Aruba',
        value: 'Aruba'
      },
      {
        key: 14,
        label: 'Australia',
        value: 'Australia'
      },
      {
        key: 15,
        label: 'Austria',
        value: 'Austria'
      },
      {
        key: 16,
        label: 'Azerbaijan',
        value: 'Azerbaijan'
      },
      {
        key: 17,
        label: 'Bahamas',
        value: 'Bahamas'
      },
      {
        key: 18,
        label: 'Bahrain',
        value: 'Bahrain'
      },
      {
        key: 19,
        label: 'Bangladesh',
        value: 'Bangladesh'
      },
      {
        key: 20,
        label: 'Barbados',
        value: 'Barbados'
      },
      {
        key: 21,
        label: 'Belarus',
        value: 'Belarus'
      },
      {
        key: 22,
        label: 'Belau',
        value: 'Belau'
      },
      {
        key: 23,
        label: 'Belgium',
        value: 'Belgium'
      },
      {
        key: 24,
        label: 'Belize',
        value: 'Belize'
      },
      {
        key: 25,
        label: 'Benin',
        value: 'Benin'
      },
      {
        key: 26,
        label: 'Bermuda',
        value: 'Bermuda'
      },
      {
        key: 27,
        label: 'Bhutan',
        value: 'Bhutan'
      },
      {
        key: 28,
        label: 'Bolivia',
        value: 'Bolivia'
      },
      {
        key: 29,
        label: 'Bonaire, Saint Eustatius and Saba',
        value: 'Bonaire, Saint Eustatius and Saba'
      },
      {
        key: 30,
        label: 'Bosnia and Herzegovina',
        value: 'Bosnia and Herzegovina'
      },
      {
        key: 31,
        label: 'Botswana',
        value: 'Botswana'
      },
      {
        key: 32,
        label: 'Bouvet Island',
        value: 'Bouvet Island'
      },
      {
        key: 33,
        label: 'Brazil',
        value: 'Brazil'
      },
      {
        key: 34,
        label: 'British Indian Ocean Territory',
        value: 'British Indian Ocean Territory'
      },
      {
        key: 35,
        label: 'British Virgin Islands',
        value: 'British Virgin Islands'
      },
      {
        key: 36,
        label: 'Brunei',
        value: 'Brunei'
      },
      {
        key: 37,
        label: 'Bulgaria',
        value: 'Bulgaria'
      },
      {
        key: 38,
        label: 'Burkina Faso',
        value: 'Burkina Faso'
      },
      {
        key: 39,
        label: 'Burundi',
        value: 'Burundi'
      },
      {
        key: 40,
        label: 'Cambodia',
        value: 'Cambodia'
      },
      {
        key: 41,
        label: 'Cameroon',
        value: 'Cameroon'
      },
      {
        key: 42,
        label: 'Canada',
        value: 'Canada'
      },
      {
        key: 43,
        label: 'Cape Verde',
        value: 'Cape Verde'
      },
      {
        key: 44,
        label: 'Cayman Islands',
        value: 'Cayman Islands'
      },
      {
        key: 45,
        label: 'Central African Republic',
        value: 'Central African Republic'
      },
      {
        key: 46,
        label: 'Chad',
        value: 'Chad'
      },
      {
        key: 47,
        label: 'Chile',
        value: 'Chile'
      },
      {
        key: 48,
        label: 'China',
        value: 'China'
      },
      {
        key: 49,
        label: 'Christmas Island',
        value: 'Christmas Island'
      },
      {
        key: 50,
        label: 'Cocos (Keeling) Islands',
        value: 'Cocos (Keeling) Islands'
      },
      {
        key: 51,
        label: 'Colombia',
        value: 'Colombia'
      },
      {
        key: 52,
        label: 'Comoros',
        value: 'Comoros'
      },
      {
        key: 53,
        label: 'Congo (Brazzaville)',
        value: 'Congo (Brazzaville)'
      },
      {
        key: 54,
        label: 'Congo (Kinshasa)',
        value: 'Congo (Kinshasa)'
      },
      {
        key: 55,
        label: 'Cook Islands',
        value: 'Cook Islands'
      },
      {
        key: 56,
        label: 'Costa Rica',
        value: 'Costa Rica'
      },
      {
        key: 57,
        label: 'Croatia',
        value: 'Croatia'
      },
      {
        key: 58,
        label: 'Cuba',
        value: 'Cuba'
      },
      {
        key: 59,
        label: 'Curaçao',
        value: 'Curaçao'
      },
      {
        key: 60,
        label: 'Cyprus',
        value: 'Cyprus'
      },
      {
        key: 61,
        label: 'Czech Republic',
        value: 'Czech Republic'
      },
      {
        key: 62,
        label: 'Denmark',
        value: 'Denmark'
      },
      {
        key: 63,
        label: 'Djibouti',
        value: 'Djibouti'
      },
      {
        key: 64,
        label: 'Dominica',
        value: 'Dominica'
      },
      {
        key: 65,
        label: 'Dominican Republic',
        value: 'Dominican Republic'
      },
      {
        key: 66,
        label: 'Ecuador',
        value: 'Ecuador'
      },
      {
        key: 67,
        label: 'Egypt',
        value: 'Egypt'
      },
      {
        key: 68,
        label: 'El Salvador',
        value: 'El Salvador'
      },
      {
        key: 69,
        label: 'Equatorial Guinea',
        value: 'Equatorial Guinea'
      },
      {
        key: 70,
        label: 'Eritrea',
        value: 'Eritrea'
      },
      {
        key: 71,
        label: 'Estonia',
        value: 'Estonia'
      },
      {
        key: 72,
        label: 'Ethiopia',
        value: 'Ethiopia'
      },
      {
        key: 73,
        label: 'Falkland Islands',
        value: 'Falkland Islands'
      },
      {
        key: 74,
        label: 'Faroe Islands',
        value: 'Faroe Islands'
      },
      {
        key: 75,
        label: 'Fiji',
        value: 'Fiji'
      },
      {
        key: 76,
        label: 'Finland',
        value: 'Finland'
      },
      {
        key: 77,
        label: 'France',
        value: 'France'
      },
      {
        key: 78,
        label: 'French Guiana',
        value: 'French Guiana'
      },
      {
        key: 79,
        label: 'French Polynesia',
        value: 'French Polynesia'
      },
      {
        key: 80,
        label: 'French Southern Territories',
        value: 'French Southern Territories'
      },
      {
        key: 81,
        label: 'Gabon',
        value: 'Gabon'
      },
      {
        key: 82,
        label: 'Gambia',
        value: 'Gambia'
      },
      {
        key: 83,
        label: 'Georgia',
        value: 'Georgia'
      },
      {
        key: 84,
        label: 'Germany',
        value: 'Germany'
      },
      {
        key: 85,
        label: 'Ghana',
        value: 'Ghana'
      },
      {
        key: 86,
        label: 'Gibraltar',
        value: 'Gibraltar'
      },
      {
        key: 87,
        label: 'Greece',
        value: 'Greece'
      },
      {
        key: 88,
        label: 'Greenland',
        value: 'Greenland'
      },
      {
        key: 89,
        label: 'Grenada',
        value: 'Grenada'
      },
      {
        key: 90,
        label: 'Guadeloupe',
        value: 'Guadeloupe'
      },
      {
        key: 91,
        label: 'Guam',
        value: 'Guam'
      },
      {
        key: 92,
        label: 'Guatemala',
        value: 'Guatemala'
      },
      {
        key: 93,
        label: 'Guernsey',
        value: 'Guernsey'
      },
      {
        key: 94,
        label: 'Guinea',
        value: 'Guinea'
      },
      {
        key: 95,
        label: 'Guinea-Bissau',
        value: 'Guinea-Bissau'
      },
      {
        key: 96,
        label: 'Guyana',
        value: 'Guyana'
      },
      {
        key: 97,
        label: 'Haiti',
        value: 'Haiti'
      },
      {
        key: 98,
        label: 'Heard Island and McDonald Islands',
        value: 'Heard Island and McDonald Islands'
      },
      {
        key: 99,
        label: 'Honduras',
        value: 'Honduras'
      },
      {
        key: 100,
        label: 'Hong Kong',
        value: 'Hong Kong'
      },
      {
        key: 101,
        label: 'Hungary',
        value: 'Hungary'
      },
      {
        key: 102,
        label: 'Iceland',
        value: 'Iceland'
      },
      {
        key: 103,
        label: 'India',
        value: 'India'
      },
      {
        key: 104,
        label: 'Indonesia',
        value: 'Indonesia'
      },
      {
        key: 105,
        label: 'Iran',
        value: 'Iran'
      },
      {
        key: 106,
        label: 'Iraq',
        value: 'Iraq'
      },
      {
        key: 107,
        label: 'Ireland',
        value: 'Ireland'
      },
      {
        key: 108,
        label: 'Isle of Man',
        value: 'Isle of Man'
      },
      {
        key: 109,
        label: 'Israel',
        value: 'Israel'
      },
      {
        key: 110,
        label: 'Italy',
        value: 'Italy'
      },
      {
        key: 111,
        label: 'Ivory Coast',
        value: 'Ivory Coast'
      },
      {
        key: 112,
        label: 'Jamaica',
        value: 'Jamaica'
      },
      {
        key: 113,
        label: 'Japan',
        value: 'Japan'
      },
      {
        key: 114,
        label: 'Jersey',
        value: 'Jersey'
      },
      {
        key: 115,
        label: 'Jordan',
        value: 'Jordan'
      },
      {
        key: 116,
        label: 'Kazakhstan',
        value: 'Kazakhstan'
      },
      {
        key: 117,
        label: 'Kenya',
        value: 'Kenya'
      },
      {
        key: 118,
        label: 'Kiribati',
        value: 'Kiribati'
      },
      {
        key: 119,
        label: 'Kosovo',
        value: 'Kosovo'
      },
      {
        key: 120,
        label: 'Kuwait',
        value: 'Kuwait'
      },
      {
        key: 121,
        label: 'Kyrgyzstan',
        value: 'Kyrgyzstan'
      },
      {
        key: 122,
        label: 'Laos',
        value: 'Laos'
      },
      {
        key: 123,
        label: 'Latvia',
        value: 'Latvia'
      },
      {
        key: 124,
        label: 'Lebanon',
        value: 'Lebanon'
      },
      {
        key: 125,
        label: 'Lesotho',
        value: 'Lesotho'
      },
      {
        key: 126,
        label: 'Liberia',
        value: 'Liberia'
      },
      {
        key: 127,
        label: 'Libya',
        value: 'Libya'
      },
      {
        key: 128,
        label: 'Liechtenstein',
        value: 'Liechtenstein'
      },
      {
        key: 129,
        label: 'Lithuania',
        value: 'Lithuania'
      },
      {
        key: 130,
        label: 'Luxembourg',
        value: 'Luxembourg'
      },
      {
        key: 131,
        label: 'Macao S.A.R., China',
        value: 'Macao S.A.R., China'
      },
      {
        key: 132,
        label: 'Macedonia',
        value: 'Macedonia'
      },
      {
        key: 133,
        label: 'Madagascar',
        value: 'Madagascar'
      },
      {
        key: 134,
        label: 'Malawi',
        value: 'Malawi'
      },
      {
        key: 135,
        label: 'Malaysia',
        value: 'Malaysia'
      },
      {
        key: 136,
        label: 'Maldives',
        value: 'Maldives'
      },
      {
        key: 137,
        label: 'Mali',
        value: 'Mali'
      },
      {
        key: 138,
        label: 'Malta',
        value: 'Malta'
      },
      {
        key: 139,
        label: 'Marshall Islands',
        value: 'Marshall Islands'
      },
      {
        key: 140,
        label: 'Martinique',
        value: 'Martinique'
      },
      {
        key: 141,
        label: 'Mauritania',
        value: 'Mauritania'
      },
      {
        key: 142,
        label: 'Mauritius',
        value: 'Mauritius'
      },
      {
        key: 143,
        label: 'Mayotte',
        value: 'Mayotte'
      },
      {
        key: 144,
        label: 'Mexico',
        value: 'Mexico'
      },
      {
        key: 145,
        label: 'Micronesia',
        value: 'Micronesia'
      },
      {
        key: 146,
        label: 'Moldova',
        value: 'Moldova'
      },
      {
        key: 147,
        label: 'Monaco',
        value: 'Monaco'
      },
      {
        key: 148,
        label: 'Mongolia',
        value: 'Mongolia'
      },
      {
        key: 149,
        label: 'Montenegro',
        value: 'Montenegro'
      },
      {
        key: 150,
        label: 'Montserrat',
        value: 'Montserrat'
      },
      {
        key: 151,
        label: 'Morocco',
        value: 'Morocco'
      },
      {
        key: 152,
        label: 'Mozambique',
        value: 'Mozambique'
      },
      {
        key: 153,
        label: 'Myanmar',
        value: 'Myanmar'
      },
      {
        key: 154,
        label: 'Namibia',
        value: 'Namibia'
      },
      {
        key: 155,
        label: 'Nauru',
        value: 'Nauru'
      },
      {
        key: 156,
        label: 'Nepal',
        value: 'Nepal'
      },
      {
        key: 157,
        label: 'Netherlands',
        value: 'Netherlands'
      },
      {
        key: 158,
        label: 'New Caledonia',
        value: 'New Caledonia'
      },
      {
        key: 159,
        label: 'New Zealand',
        value: 'New Zealand'
      },
      {
        key: 160,
        label: 'Nicaragua',
        value: 'Nicaragua'
      },
      {
        key: 161,
        label: 'Niger',
        value: 'Niger'
      },
      {
        key: 162,
        label: 'Nigeria',
        value: 'Nigeria'
      },
      {
        key: 163,
        label: 'Niue',
        value: 'Niue'
      },
      {
        key: 164,
        label: 'Norfolk Island',
        value: 'Norfolk Island'
      },
      {
        key: 165,
        label: 'North Korea',
        value: 'North Korea'
      },
      {
        key: 166,
        label: 'Northern Mariana Islands',
        value: 'Northern Mariana Islands'
      },
      {
        key: 167,
        label: 'Norway',
        value: 'Norway'
      },
      {
        key: 168,
        label: 'Oman',
        value: 'Oman'
      },
      {
        key: 169,
        label: 'Pakistan',
        value: 'Pakistan'
      },
      {
        key: 170,
        label: 'Palestinian Territory',
        value: 'Palestinian Territory'
      },
      {
        key: 171,
        label: 'Panama',
        value: 'Panama'
      },
      {
        key: 172,
        label: 'Papua New Guinea',
        value: 'Papua New Guinea'
      },
      {
        key: 173,
        label: 'Paraguay',
        value: 'Paraguay'
      },
      {
        key: 174,
        label: 'Peru',
        value: 'Peru'
      },
      {
        key: 175,
        label: 'Philippines',
        value: 'Philippines'
      },
      {
        key: 176,
        label: 'Pitcairn',
        value: 'Pitcairn'
      },
      {
        key: 177,
        label: 'Poland',
        value: 'Poland'
      },
      {
        key: 178,
        label: 'Portugal',
        value: 'Portugal'
      },
      {
        key: 179,
        label: 'Puerto Rico',
        value: 'Puerto Rico'
      },
      {
        key: 180,
        label: 'Qatar',
        value: 'Qatar'
      },
      {
        key: 181,
        label: 'Reunion',
        value: 'Reunion'
      },
      {
        key: 182,
        label: 'Romania',
        value: 'Romania'
      },
      {
        key: 183,
        label: 'Russia',
        value: 'Russia'
      },
      {
        key: 184,
        label: 'Rwanda',
        value: 'Rwanda'
      },
      {
        key: 185,
        label: 'São Tomé and Príncipe',
        value: 'São Tomé and Príncipe'
      },
      {
        key: 186,
        label: 'Saint Barthélemy',
        value: 'Saint Barthélemy'
      },
      {
        key: 187,
        label: 'Saint Helena',
        value: 'Saint Helena'
      },
      {
        key: 188,
        label: 'Saint Kitts and Nevis',
        value: 'Saint Kitts and Nevis'
      },
      {
        key: 189,
        label: 'Saint Lucia',
        value: 'Saint Lucia'
      },
      {
        key: 190,
        label: 'Saint Martin (Dutch part)',
        value: 'Saint Martin (Dutch part)'
      },
      {
        key: 191,
        label: 'Saint Martin (French part)',
        value: 'Saint Martin (French part)'
      },
      {
        key: 192,
        label: 'Saint Pierre and Miquelon',
        value: 'Saint Pierre and Miquelon'
      },
      {
        key: 193,
        label: 'Saint Vincent and the Grenadines',
        value: 'Saint Vincent and the Grenadines'
      },
      {
        key: 194,
        label: 'Samoa',
        value: 'Samoa'
      },
      {
        key: 195,
        label: 'San Marino',
        value: 'San Marino'
      },
      {
        key: 196,
        label: 'Saudi Arabia',
        value: 'Saudi Arabia'
      },
      {
        key: 197,
        label: 'Senegal',
        value: 'Senegal'
      },
      {
        key: 198,
        label: 'Serbia',
        value: 'Serbia'
      },
      {
        key: 199,
        label: 'Seychelles',
        value: 'Seychelles'
      },
      {
        key: 200,
        label: 'Sierra Leone',
        value: 'Sierra Leone'
      },
      {
        key: 201,
        label: 'Singapore',
        value: 'Singapore'
      },
      {
        key: 202,
        label: 'Slovakia',
        value: 'Slovakia'
      },
      {
        key: 203,
        label: 'Slovenia',
        value: 'Slovenia'
      },
      {
        key: 204,
        label: 'Solomon Islands',
        value: 'Solomon Islands'
      },
      {
        key: 205,
        label: 'Somalia',
        value: 'Somalia'
      },
      {
        key: 206,
        label: 'South Africa',
        value: 'South Africa'
      },
      {
        key: 207,
        label: 'South Georgia/Sandwich Islands',
        value: 'South Georgia/Sandwich Islands'
      },
      {
        key: 208,
        label: 'South Korea',
        value: 'South Korea'
      },
      {
        key: 209,
        label: 'South Sudan',
        value: 'South Sudan'
      },
      {
        key: 210,
        label: 'Spain',
        value: 'Spain'
      },
      {
        key: 211,
        label: 'Sri Lanka',
        value: 'Sri Lanka'
      },
      {
        key: 212,
        label: 'Sudan',
        value: 'Sudan'
      },
      {
        key: 213,
        label: 'Suriname',
        value: 'Suriname'
      },
      {
        key: 214,
        label: 'Svalbard and Jan Mayen',
        value: 'Svalbard and Jan Mayen'
      },
      {
        key: 215,
        label: 'Swaziland',
        value: 'Swaziland'
      },
      {
        key: 216,
        label: 'Sweden',
        value: 'Sweden'
      },
      {
        key: 217,
        label: 'Switzerland',
        value: 'Switzerland'
      },
      {
        key: 218,
        label: 'Syria',
        value: 'Syria'
      },
      {
        key: 219,
        label: 'Taiwan',
        value: 'Taiwan'
      },
      {
        key: 220,
        label: 'Tajikistan',
        value: 'Tajikistan'
      },
      {
        key: 221,
        label: 'Tanzania',
        value: 'Tanzania'
      },
      {
        key: 222,
        label: 'Thailand',
        value: 'Thailand'
      },
      {
        key: 223,
        label: 'Timor-Leste',
        value: 'Timor-Leste'
      },
      {
        key: 224,
        label: 'Togo',
        value: 'Togo'
      },
      {
        key: 225,
        label: 'Tokelau',
        value: 'Tokelau'
      },
      {
        key: 226,
        label: 'Tonga',
        value: 'Tonga'
      },
      {
        key: 227,
        label: 'Trinidad and Tobago',
        value: 'Trinidad and Tobago'
      },
      {
        key: 228,
        label: 'Tunisia',
        value: 'Tunisia'
      },
      {
        key: 229,
        label: 'Turkey',
        value: 'Turkey'
      },
      {
        key: 230,
        label: 'Turkmenistan',
        value: 'Turkmenistan'
      },
      {
        key: 231,
        label: 'Turks and Caicos Islands',
        value: 'Turks and Caicos Islands'
      },
      {
        key: 232,
        label: 'Tuvalu',
        value: 'Tuvalu'
      },
      {
        key: 233,
        label: 'Uganda',
        value: 'Uganda'
      },
      {
        key: 234,
        label: 'Ukraine',
        value: 'Ukraine'
      },
      {
        key: 235,
        label: 'United Arab Emirates',
        value: 'United Arab Emirates'
      },
      {
        key: 236,
        label: 'United Kingdom (UK)',
        value: 'United Kingdom (UK)'
      },
      {
        key: 237,
        label: 'United States (US)',
        value: 'United States (US)'
      },
      {
        key: 238,
        label: 'United States (US) Minor Outlying Islands',
        value: 'United States (US) Minor Outlying Islands'
      },
      {
        key: 239,
        label: 'United States (US) Virgin Islands',
        value: 'United States (US) Virgin Islands'
      },
      {
        key: 240,
        label: 'Uruguay',
        value: 'Uruguay'
      },
      {
        key: 241,
        label: 'Uzbekistan',
        value: 'Uzbekistan'
      },
      {
        key: 242,
        label: 'Vanuatu',
        value: 'Vanuatu'
      },
      {
        key: 243,
        label: 'Vatican',
        value: 'Vatican'
      },
      {
        key: 244,
        label: 'Venezuela',
        value: 'Venezuela'
      },
      {
        key: 245,
        label: 'Vietnam',
        value: 'Vietnam'
      },
      {
        key: 246,
        label: 'Wallis and Futuna',
        value: 'Wallis and Futuna'
      },
      {
        key: 247,
        label: 'Western Sahara',
        value: 'Western Sahara'
      },
      {
        key: 248,
        label: 'Yemen',
        value: 'Yemen'
      },
      {
        key: 249,
        label: 'Zambia',
        value: 'Zambia'
      },
      {
        key: 250,
        label: 'Zimbabwe',
        value: 'Zimbabwe'
      }
];

const industryTypeData = [
  {
    key: 1,
    label: 'Agriculture',
    value: 'Agriculture'
  },
  {
    key: 2,
    label: 'Architect',
    value: 'Architect'
  },
  {
    key: 3,
    label: 'Construction',
    value: 'Construction'
  },
  {
    key: 4,
    label: 'Digital Marketing',
    value: 'Digital Marketing'
  },
  {
    key: 5,
    label: 'E-Commerce - Fashion',
    value: 'E-Commerce - Fashion'
  },
  {
    key: 6,
    label: 'E-Commerce - Cosmetics / Beauty Products',
    value: 'E-Commerce - Cosmetics / Beauty Products'
  },
  {
    key: 7,
    label: 'E-Commerce - Electronics',
    value: 'E-Commerce - Electronics'
  },
  {
    key: 8,
    label: 'E-Commerce - Food',
    value: 'E-Commerce - Food'
  },
  {
    key: 9,
    label: 'E-Commerce - Texttiles',
    value: 'E-Commerce - Texttiles'
  },
  {
    key: 10,
    label: 'Education Industry',
    value: 'Education Industry'
  },
  {
    key: 11,
    label: 'Education/Edutech',
    value: 'Education/Edutech'
  },
  {
    key: 12,
    label: 'Entertainment - Media House',
    value: 'Entertainment - Media House'
  },
  {
    key: 13,
    label: 'Entertainment - Music Studio',
    value: 'Entertainment - Music Studio'
  },
  {
    key: 14,
    label: 'Entertainment - Production House',
    value: 'Entertainment - Production House'
  },
  {
    key: 15,
    label: 'Fashion - Designer',
    value: 'Fashion - Designer'
  },
  {
    key: 16,
    label: 'Fashion - Trader',
    value: 'Fashion - Trader'
  },
  {
    key: 17,
    label: 'Food - Manufacturing',
    value: 'Food - Manufacturing'
  },
  {
    key: 18,
    label: 'Food - QSR',
    value: 'Food - QSR'
  },
  {
    key: 19,
    label: 'Food - Restaurant',
    value: 'Food - Restaurant'
  },
  {
    key: 20,
    label: 'Food - Trading',
    value: 'Food - Trading'
  },
  {
    key: 21,
    label: 'Furniture Manufacturer / Trader',
    value: 'Furniture Manufacturer / Trader'
  },
  {
    key: 22,
    label: 'HR and Tools',
    value: 'HR and Tools'
  },
  {
    key: 23,
    label: 'Healthcare',
    value: 'Healthcare'
  },
  {
    key: 24,
    label: 'Hosptality - Events Management',
    value: 'Hosptality - Events Management'
  },
  {
    key: 25,
    label: 'Hospitality - Hospitals',
    value: 'Hospitality - Hospitals'
  },
  {
    key: 26,
    label: 'Hospitality - Hotels',
    value: 'Hospitality - Hotels'
  },
  {
    key: 27,
    label: 'Hospitality - Tours & Travels',
    value: 'Hospitality - Tours & Travels'
  },
  {
    key: 28,
    label: 'Interior Designer',
    value: 'Interior Designer'
  },
  {
    key: 29,
    label: 'Logistics & Freight Forwarding',
    value: 'Logistics & Freight Forwarding'
  },
  {
    key: 30,
    label: 'Manufacturing',
    value: 'Manufacturing'
  },
  {
    key: 31,
    label: 'Medical Devices',
    value: 'Medical Devices'
  },
  {
    key: 32,
    label: 'NGO/NPO',
    value: 'NGO/NPO'
  },
  {
    key: 33,
    label: 'Pharma',
    value: 'Pharma'
  },
  {
    key: 34,
    label: 'Professional Services Insurance',
    value: 'Professional Services Insurance'
  },
  {
    key: 35,
    label: 'Professional Services Mechanical Automation',
    value: 'Professional Services Mechanical Automation'
  },
  {
    key: 36,
    label: 'Professional Services Public Relations',
    value: 'Professional Services Public Relations'
  },
  {
    key: 37,
    label: 'Professional Services R & D',
    value: 'Professional Services R & D'
  },
  {
    key: 38,
    label: 'Services Renewable Energy',
    value: 'Services Renewable Energy'
  },
  {
    key: 39,
    label: 'Professional Services Training',
    value: 'Professional Services Training'
  },
  {
    key: 40,
    label: 'Professional Services - IT',
    value: 'Professional Services - IT'
  },
  {
    key: 41,
    label: 'Professional Services - Photographer',
    value: 'Professional Services - Photographer'
  },
  {
    key: 42,
    label: 'Professional Services - Accounts',
    value: 'Professional Services - Accounts'
  },
  {
    key: 43,
    label: 'Proffessional Services - Digital Marketing Agency',
    value: 'Proffessional Services - Digital Marketing Agency'
  },
  {
    key: 44,
    label: 'Proffessional Services - Legal',
    value: 'Proffessional Services - Legal'
  },
  {
    key: 45,
    label: 'Proffessional Services - Videography',
    value: 'Proffessional Services - Videography'
  },
  {
    key: 46,
    label: 'Real Estate',
    value: 'Real Estate'
  },
  {
    key: 47,
    label: 'Service Provider',
    value: 'Service Provider'
  },
  {
    key: 48,
    label: 'Telecommunication',
    value: 'Telecommunication'
  },
  {
    key: 49,
    label: 'Trader - Electronics',
    value: 'Trader - Electronics'
  },
  {
    key: 50,
    label: 'Trading',
    value: 'Trading'
  },
  {
    key: 51,
    label: 'Other',
    value: 'Other'
  }
];

const developerTimePeriodData = [
      {
        key: 1,
        label: '3 Months',
        value: '3 Months'
      },
      {
        key: 2,
        label: '6 Months',
        value: '6 Months'
      },
      {
        key: 3,
        label: '1Y+',
        value: '1Y+'
      },
      {
        key: 4,
        label: 'Custom',
        value: 'Custom'
      }
];

const developerSkillLookingForData = [
      {
        key: 1,
        label: 'Web Developer',
        value: 'Web Developer'
      },
      {
        key: 2,
        label: 'Digital Marketer',
        value: 'Digital Marketer'
      },
      {
        key: 3,
        label: 'Odoo Developer',
        value: 'Odoo Developer'
      },
      {
        key: 4,
        label: 'Graphics Designer',
        value: 'Graphics Designer'
      },
      {
        key: 5,
        label: 'Mobile App Developer',
        value: 'Mobile App Developer'
      },
      {
        key: 6,
        label: 'React JS Developer',
        value: 'React JS Developer'
      },
      {
        key: 7,
        label: 'Other',
        value: 'Other'
      }
];

const developerExperienceRangeData = [
    {
        key: 1,
        label: '0 to 2 Years',
        value: '0 to 2 Years'
      },
      {
        key: 2,
        label: '2 to 4 Years',
        value: '2 to 4 Years'
      },
      {
        key: 3,
        label: '4 to 8 Years',
        value: '4 to 8 Years'
      },
      {
        key: 4,
        label: '8 to 12 Years',
        value: '8 to 12 Years'
      },
      {
        key: 5,
        label: '12+ Years',
        value: '12+ Years'
      }
];

const HireDeveloperModalScreen = ({modalOpen, setModalOpen}) => 
{
  const [value, setValue] = useState(null);

  /* const firstNameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef(); */

  function onSubmitHandler(values) 
  {
    console.log(values);
    Alert.alert("Added Successfully!","Form data: " + JSON.stringify(values));
  }

  function isFormValid(isValid,touched) 
  {
    return isValid && Object.keys(touched).length !== 0;
  }

  const [dateOfBirth, setDateOfBirth] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  }
  const onChange = ({type}, selectedDate) => {
    if(type=="set")
    {
        const currentDate = selectedDate;
        setDate(currentDate);
        if(Platform.OS==="android")
        {   
            toggleDatePicker();
            setDateOfBirth(currentDate.toDateString());
        }
    }
    else
    {
        toggleDatePicker();
    }
  }

  return (
      <>
        <Modal visible={modalOpen} animationType="slide">
        <View style={ServicesStyles.getInTouchWithUsContainerView}> 
            <View style={ServicesStyles.getInTouchWithUsForm}>
              <View style={{ marginTop: 20, marginBottom: 20 }}>
              <ScrollView>
                <LinearGradient 
                  colors={['#FFFFFFE6','#FFFFFF']}
                  start={{x:0,y:0}}
                  end={{x:0,y:0}}
                  style={{ borderRadius: 16, paddingLeft: 20, paddingRight: 20, paddingTop: 0, paddingBottom: 20, borderWidth: 1, borderColor: '#DEDEDE' }}>
                  <Formik
                      initialValues={{
                      firstName: "",
                      lastName: "",
                      email: "",
                      phoneormobile: "",
                      companyname: "",
                      industrytype: ""
                      }}
                      onSubmit={onSubmitHandler}
                      validationSchema={validationSchema}
                      style={{ borderRadius: 16 }}
                  >
                      {({
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      values,
                      errors,
                      touched,
                      isValid,
                      }) => (
                      <>
                          <FormField
                            field="firstName"
                            // label="First Name"
                            autoCapitalize="words"
                            values={values}
                            touched={touched}
                            errors={errors}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            placeholder="First Name"
                          />
                          <FormField
                            field="lastName"
                            // label="Last Name"
                            autoCapitalize="words"
                            values={values}
                            touched={touched}
                            errors={errors}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            placeholder="Last Name"
                          />
                          <FormField
                            field="email"
                            // label="Email *"
                            values={values}
                            touched={touched}
                            errors={errors}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            isRequired
                            asterik
                            placeholder="E-Mail ID *"
                          />
                          <FormField
                            field="phoneormobile"
                            // label="Phone/Mobile *"
                            secureTextEntry={true}
                            values={values}
                            touched={touched}
                            errors={errors}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            isRequired
                            asterik
                            placeholder="Phone/Mobile Number *"
                          />
                          <Dropdown
                              field="country"
                              secureTextEntry={true}
                              // value={value}
                              touched={touched}
                              errors={errors}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              isRequired
                              asterik
                              style={styles.dropdown}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={countryData}
                              search
                              maxHeight={300}
                              labelField="label"
                              valueField="value"
                              placeholder="Select Country *"
                              searchPlaceholder="Search Country"
                              values={values}
                              onChange={item=>{setValue(item.value);}}
                            />
                            <FormField
                                field="companyname"
                                // label="Company Name *"
                                secureTextEntry={true}
                                values={values}
                                touched={touched}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                isRequired
                                asterik
                                placeholder="Company Name *"
                            />
                            <Dropdown
                                field="industrytype"
                                secureTextEntry={true}
                                // value={value}
                                touched={touched}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                isRequired
                                asterik
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={industryTypeData}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="Industry Type *"
                                searchPlaceholder="Search Industry Type"
                                values={values}
                                onChange={item=>{setValue(item.value);}}
                            />
                            <Dropdown
                                field="developerTimePeriod"
                                secureTextEntry={true}
                                // value={value}
                                touched={touched}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                isRequired
                                asterik
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={developerTimePeriodData}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="Select how long you want developer *"
                                values={values}
                                onChange={item=>{setValue(item.value);}}
                            />
                            <Dropdown
                                field="developerSkill"
                                secureTextEntry={true}
                                // value={value}
                                touched={touched}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                isRequired
                                asterik
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={developerSkillLookingForData}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="Select skill you are looking for *"
                                searchPlaceholder="Search skill you are looking for"
                                values={values}
                                onChange={item=>{setValue(item.value);}}
                            />
                            <View>
                                <Text style={{ marginBottom: 10 }}>
                                    When you want ? *
                                </Text>
                                {showPicker && (
                                    <>
                                        <DateTimePicker mode="date" display="spinner" value={date} onChange={onChange} />
                                    </>
                                )}
                                {!showPicker && (
                                    <>
                                        <Pressable onPress={toggleDatePicker}>
                                            <TextInput 
                                                placeholder='19-06-2023'
                                                value={dateOfBirth}
                                                onChangeText={setDateOfBirth}
                                                placeholderTextColor="#333333"
                                                editable={false}
                                                style={{ backgroundColor: "#FFFFFF", borderRadius: 6, borderColor: 'lightgray', borderWidth: 1, borderBottomWidth: 0, borderBottomColor: 'lightgray' }}
                                            />
                                        </Pressable>
                                    </>
                                )}
                            </View>
                            <Dropdown
                                field="developerExperienceRange"
                                secureTextEntry={true}
                                // value={value}
                                touched={touched}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                isRequired
                                asterik
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={developerExperienceRangeData}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="Select Experience Range *"
                                values={values}
                                onChange={item=>{setValue(item.value);}}
                            />
                            {/* <View>
                                <Text style={{ marginBottom: 10 }}>
                                    Any Query
                                </Text> */}
                                <TextInput
                                    multiline={true}
                                    numberOfLines={6}
                                    // onChangeText={(text) => this.setState({text})}
                                    // value={this.state.text}
                                    values={values}
                                    onChange={item=>{setValue(item.value);}}
                                    editable={true}
                                    placeholder="Any Query"
                                    style={{ backgroundColor: "#FFFFFF", borderRadius: 6, borderColor: 'lightgray', borderWidth: 1, borderBottomWidth: 0, borderBottomColor: 'lightgray' }}
                                />
                            {/* </View> */}
                           {/*  <CalendarPicker
                                onDateChange={this.onDateChange}
                            /> */}
                        <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
                          <TouchableOpacity onPress={handleSubmit}>
                            <View style={styles.button}>
                              <Text style={styles.buttonText}>SUBMIT</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={()=>setModalOpen(false)} style={{ marginLeft: 20 }}>
                            <View style={{ backgroundColor: '#E34234', borderRadius: 6, alignItems: 'center', justifyContent: 'center', paddingVertical: 9.4, paddingHorizontal: 16, marginTop: 10 }}>
                              <Text style={styles.buttonText}>CANCEL</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </>
                      )}
                  </Formik>
                </LinearGradient>
                </ScrollView>
              </View>
            </View>
        </View>
        </Modal>
      </>
  );
}

export default HireDeveloperModalScreen;