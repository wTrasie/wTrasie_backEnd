import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentPartsLead extends Schema.Component {
  collectionName: 'components_content_parts_leads';
  info: {
    displayName: 'lead';
    description: '';
  };
  attributes: {
    lead: Attribute.Text &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 160;
        maxLength: 300;
      }>;
  };
}

export interface ContentPartsMaps extends Schema.Component {
  collectionName: 'components_content_parts_maps';
  info: {
    displayName: 'GoogleMaps';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

export interface ContentPartsMedia extends Schema.Component {
  collectionName: 'components_content_parts_media';
  info: {
    displayName: 'media';
    description: '';
  };
  attributes: {
    media: Attribute.Media & Attribute.Required;
  };
}

export interface ContentPartsQuote extends Schema.Component {
  collectionName: 'components_content_parts_quotes';
  info: {
    displayName: 'quote';
    description: '';
  };
  attributes: {
    quote: Attribute.Text & Attribute.Required;
  };
}

export interface ContentPartsTxt extends Schema.Component {
  collectionName: 'components_content_parts_txts';
  info: {
    displayName: 'txt';
    description: '';
  };
  attributes: {
    txt: Attribute.RichText & Attribute.Required;
  };
}

export interface ContentPartsYouTube extends Schema.Component {
  collectionName: 'components_content_parts_you_tubes';
  info: {
    displayName: 'gallery';
    description: '';
  };
  attributes: {
    gallery: Attribute.Media & Attribute.Required;
  };
}

export interface ContentPartsYoutube extends Schema.Component {
  collectionName: 'components_content_parts_youtubes';
  info: {
    displayName: 'youtube';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

export interface FooterColumn extends Schema.Component {
  collectionName: 'components_footer_columns';
  info: {
    displayName: 'column';
  };
  attributes: {
    link: Attribute.Component<'others.link', true>;
    header: Attribute.String;
  };
}

export interface OthersAdress extends Schema.Component {
  collectionName: 'components_others_adresses';
  info: {
    displayName: 'adress';
    description: '';
  };
  attributes: {
    street: Attribute.String & Attribute.Required;
    numberStreet: Attribute.String & Attribute.Required;
    apartmentNumber: Attribute.String;
    postCode: Attribute.String & Attribute.Required;
    shortname: Attribute.Relation<'others.adress', 'oneToOne', 'api::tag.tag'>;
    googleMaps: Attribute.Component<'content-parts.maps'>;
    phones: Attribute.Component<'others.phone', true>;
    emails: Attribute.Component<'others.email', true>;
    typ: Attribute.Enumeration<['primmary', 'secondary']>;
  };
}

export interface OthersCompanyData extends Schema.Component {
  collectionName: 'components_others_company_data';
  info: {
    displayName: 'companyData';
    description: '';
  };
  attributes: {
    companyName: Attribute.String & Attribute.Required & Attribute.Unique;
    nip: Attribute.String & Attribute.Required & Attribute.Unique;
    regon: Attribute.String & Attribute.Unique;
    krs: Attribute.String & Attribute.Unique;
    typ: Attribute.Enumeration<
      [
        'dzialalnosc gospodarcza',
        'spolka cywilna',
        'spolka z ograniczona odpowiedzialnoscia',
        'spolka akcyjna'
      ]
    >;
  };
}

export interface OthersEmail extends Schema.Component {
  collectionName: 'components_others_emails';
  info: {
    displayName: 'email';
    description: '';
  };
  attributes: {
    email: Attribute.Email & Attribute.Required;
  };
}

export interface OthersLink extends Schema.Component {
  collectionName: 'components_others_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    target: Attribute.Enumeration<['_blank', '_self', '_parent', '_top']>;
    rel: Attribute.Enumeration<
      [
        'alternate',
        'author',
        'bookmark',
        'canonical',
        'dns-prefetch',
        'external',
        'help',
        'icon',
        'license',
        'manifest',
        'me',
        'modulepreload',
        'next',
        'nofollow',
        'noopener',
        'noreferrer',
        'opener',
        'pingback',
        'preconnect',
        'prefetch',
        'preload',
        'prerender',
        'prev',
        'search',
        'stylesheet',
        'tag'
      ]
    >;
  };
}

export interface OthersLinksList extends Schema.Component {
  collectionName: 'components_others_links_lists';
  info: {
    displayName: 'LinksList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.Component<'others.link', true> & Attribute.Required;
  };
}

export interface OthersPagesSocialMedia extends Schema.Component {
  collectionName: 'components_others_pages_social_medias';
  info: {
    displayName: 'pagesSocialMedia';
  };
  attributes: {
    typ: Attribute.Enumeration<
      ['page', 'shop', 'facebook', 'twitter', 'youtube', 'tiktok']
    >;
    url: Attribute.String & Attribute.Required;
  };
}

export interface OthersPhone extends Schema.Component {
  collectionName: 'components_others_phones';
  info: {
    displayName: 'phone';
    description: '';
  };
  attributes: {
    phone: Attribute.String & Attribute.Required;
    typ: Attribute.Enumeration<['mobile', 'home', 'fax']>;
  };
}

export interface OthersSeo extends Schema.Component {
  collectionName: 'components_others_seos';
  info: {
    displayName: 'SEO';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Unique;
    description: Attribute.Text & Attribute.Unique;
  };
}

export interface OthersSettingPage extends Schema.Component {
  collectionName: 'components_others_setting_pages';
  info: {
    displayName: 'settingPage';
    description: '';
  };
  attributes: {
    page: Attribute.String & Attribute.Required & Attribute.Unique;
    seo: Attribute.Component<'others.seo'> & Attribute.Required;
    filter: Attribute.Component<'others.site-bar-filters', true> &
      Attribute.Required;
  };
}

export interface OthersSiteBarFilters extends Schema.Component {
  collectionName: 'components_others_site_bar_filters';
  info: {
    displayName: 'siteBarFilters';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.String & Attribute.Required;
    typ: Attribute.Enumeration<['tags', 'articles', 'clients', 'users']> &
      Attribute.Required &
      Attribute.DefaultTo<'tags'>;
    key: Attribute.String;
  };
}

export interface StatsViews extends Schema.Component {
  collectionName: 'components_stats_views';
  info: {
    displayName: 'views';
    description: '';
  };
  attributes: {
    views: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<1>;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'content-parts.lead': ContentPartsLead;
      'content-parts.maps': ContentPartsMaps;
      'content-parts.media': ContentPartsMedia;
      'content-parts.quote': ContentPartsQuote;
      'content-parts.txt': ContentPartsTxt;
      'content-parts.you-tube': ContentPartsYouTube;
      'content-parts.youtube': ContentPartsYoutube;
      'footer.column': FooterColumn;
      'others.adress': OthersAdress;
      'others.company-data': OthersCompanyData;
      'others.email': OthersEmail;
      'others.link': OthersLink;
      'others.links-list': OthersLinksList;
      'others.pages-social-media': OthersPagesSocialMedia;
      'others.phone': OthersPhone;
      'others.seo': OthersSeo;
      'others.setting-page': OthersSettingPage;
      'others.site-bar-filters': OthersSiteBarFilters;
      'stats.views': StatsViews;
    }
  }
}
