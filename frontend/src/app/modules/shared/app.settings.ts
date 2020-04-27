import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppSettings {
  public static BASE_URL = environment.basePath;
  public static HEADER_CONTENT_TYPE = 'application/json';
  public static HEADER_AUTHORIZATION = 'Authorization';
  public static HEADER_TIMEZONE = 'Timezone';
  public static HEADER_TIMEZONE_VALUE = '';
  public static HEADER_ACCEPT_LANGUAGE = 'en-US';
  public static HEADER_AUTHORIZATION_VALUE = '';
  public static USER: any = null;
  public static TOKEN_KEY = 'Token';
  public static USER_DETAILS = 'userDetails';
  public static FILE_UPLOAD_ID = '';
  public static FILE_UPLOAD_NAME = '';
  public static PROFILE_UPLOAD_ID = '';
  public static PROFILE_UPLOAD_NAME = '';
  public static FAQ: any = null;
  public static ACCESS_LIST = 'ACCESS_LIST';
  public static ACCESS_MENU = 'ACCESS_MENU';
  public static TIME_SETTINGS = 'TIME_SETTINGS';
  public static MIN_DISTANCE = 0.1;
  public static MAX_DISTANCE = 1;
  public static UPLOAD_FILE_URL = AppSettings.BASE_URL + '/secure/file';
  public static GET_FILE_URL = AppSettings.BASE_URL + '/file';
  public static GET_FILE_THUMB_URL = AppSettings.BASE_URL + '/file/thumbnail_';
  public static EXPORT_URL = AppSettings.BASE_URL + '/';
  public static PRINT_URL = AppSettings.BASE_URL + '/';
  public static DEFAULT_PROFILE_IMAGE_URL = '/assets/images/default_profile.png';
  public static CLEAR_NOTIFICATION_INTERVAL: any;
  public static NOTIFICATION_INTERVAL: 600;
  public static IGNORE_LINK = [];
  public static SUPPORTED_COUNTRY: 'india';
  public static WEBSITE_PATTERN = new RegExp(['^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?',
    '[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})',
    '?(\/.*)?$'].join(''));
  public static NAME_PATTERN = new RegExp(['^[A-Za-z\\d\-_\\s]*$'].join(''));
  public static ROLE_PATTERN = new RegExp(['^[A-Za-z\\d\-_\\s/\\\\\]*$'].join(''));
  public static PHONE_PATTERN: any = '^[0-9][0-9]*$';
  public static NUMBER_PATTERN = /^\+?[0-9\-]+$/;
  public static AMOUNT_PATTERN = new RegExp(['^[0-9\\d\.]*$'].join(''));
  public static PHONE_CODE = /([0-9]{4,})|[1-9]/;
  public static EMAIL_PATTERN = new RegExp(['[a-z|A-Z|0-9]+[@]+[a-z|A-Z|0-9]+[.]+[a-z|A-Z|0-9]+'].join(''));
  // public static EMAIL_PATTERN = new RegExp(['/^\S+@\S+\.\S+$/'].join(''));
  public static ZIPCODE_PATTERN = new RegExp(['^[0-9]'].join(''));
  public static DIGIT_PATTERN = new RegExp(['^[\\d]*$'].join(''));
  public static RADIUS_DIGIT_PATTERN = /^[0-9|.|0-9]+$/;
  public static NUMBER_NOT_ZERO = new RegExp(['^[1-9][0-9]*$'].join(''));
  public static FEE_PATTERN = new RegExp(['^\\d+(\.\\d{1,2})?$'].join(''));
  public static ALPHA_NUMERIC = new RegExp(['^[A-Za-z0-9]'].join(''));
  public static VALUE_ONE_TO_HUNDRED = new RegExp(['^[1-9][0-9]?$|^100$'].join(''));
  public static NON_ZERO_VALUES = new RegExp(['^[1-9][0-9]*$'].join(''));
  public static HOTEL_PROFILE_UPLOAD_ID = '';
  public static HOTEL_PROFILE_UPLOAD_NAME = '';
  public static PERSON_NAME_PATTERN = '^[a-zA-Z][a-zA-Z\\s\-\_]+$';
  public static COMPANY_AND_PERSON_NAME_PATTERN = '^[a-zA-Z0-9][a-zA-Z0-9\\s\-\_]+$';
  public static FAX_PATTERN = /^\+?[0-9\-]+$/;
  public static TIME_ZONE_FIRST_STRING = /[(]/gi;
  public static TIME_ZONE_SECOND_STRING = /[)]/gi;
  public static DAYS_COLLECTION = [
    { label: 'Sun', value: '1' },
    { label: 'Mon', value: '2' },
    { label: 'Tue', value: '3' },
    { label: 'Wed', value: '4' },
    { label: 'Thu', value: '5' },
    { label: 'Fri', value: '6' },
    { label: 'Sat', value: '7' }
  ];

  public static LOGGED_IN_ROLE = '';
  public static roles = [
    {
      roleCode: 'System Admin',
      redirect: '/admin-dashboard'
    }

  ];

  public static DATE_FORMATTER = 'MMM DD, YYYY hh:mm A';

  public static COOKIE_EXPIRY = (1 * 24 * 60 * 60 * 1000);

  public static FILE_UPLOAD_MAX_SIZE_IN_BYTE = 10000000;

  public static SESSION_KEY_NAME = 'X-SESSION-KEY';
}
