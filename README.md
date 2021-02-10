<p align="left"><img width=60% src="https://raw.githubusercontent.com/valentinradu/stencil/master/assets/github-logo.svg"></p>


![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-yellowgreen.svg)
[![GitHub Issues](https://img.shields.io/github/issues/valentinradu/stencil.svg)](https://github.com/valentinradu/stencil/issues)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-blueviolet.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Why?

Coding responsive HTML that works on all email clients is daunting and time consuming. `stencil` helps you create beautiful emails in just a couple of lines of code.

## Install

```
npm install @radval/stencil
//or
yarn add @radval/stencil
```

## Usage

```javascript
const Stencil = require('@radval/stencil')


const stencil = new Stencil('transactional')
const html = stencil.render({
    heading: 'Welcome, Jane! 🎉',
    message: 'We’ve heard you like emails!',
})
```

Each `stencil` email has the same structure: header, body, footer. 
The header has a logo, heading (title), message and an action button. The footer contains social media links, the business address and the unsubscribe message.

Check out [stencil.email](https://stencil.email) to see how templates look! Alternatively you can use the `.sketch` file here.


There are 4 body categories:

* `welcome`: Adds a list of tasks or next steps to follow.
* `transactional`: Suited for password resets, account-related alerts, event-driven notifications and so on.
* `confirmation`: Adds a confirmation code.
* `newsletter`: Adds an articles list, each having an image, title, subtile, description and action button.

## Customization

There are several ways in which you can customize `stencil` emails: beyond text you can change the color theme and each image and icon. Customization is done by passing a view object to the `render` method.
Keep in mind that all the urls you're using have to be publicly available so that the recipient of your emails can see them. 
Also, all of the properties are optional, although without some of them the email would make little sense.

Here's what you can tweak:

## Top-level views
Sent directly to the `render` method.

### General

| Name              | Description                                       | Type                    |
| :---------------- | :------------------------------------------------ | :---------------------- |
| `title`           | The title that shows up in web browsers tab       | string                  |
| `preview`         | The preview that shows up in email clients lists  | string                  |
| `font`            | The global font                                   | [font](#font)            |
| `logo`            | The logo                                          | [image](#image)          |
| `banner`          | A image banner appearing under the logo           | [image](#image)          |
| `action`          | The header main button's action                   | [action](#image)         |
| `heading`         | The header's title                                | string/html             |
| `message`         | The header's message                              | string/html             |
| `social`          | The footer's social media links                   | array<[social](#social)> |
| `businessAddress` | The business address below the social media links | [address](#address)      |
| `unsubscribe`     | The unsubscribe message                           | string/html             |


### Welcome

| Name    | Description               | Type           |
| :------ | :------------------------ | :------------- |
| `steps` | A todo or next steps list | [steps](#steps) |

### Confirmation

| Name   | Description           | Type        |
| :----- | :-------------------- | :---------- |
| `code` | The confirmation code | string/html |

### Newsletter

| Name       | Description        | Type                       |
| :--------- | :----------------- | :------------------------- |
| `articles` | A list of articles | array<[article](#articles)> |

## Objects
These are used by the view's properties (see above)

### Font

| Name   | Description                       | Type   |
| :----- | :-------------------------------- | :----- |
| `name` | The font name, (e.g. Roboto)      | string |
| `url`  | The font URL (publicly available) | string |

### Image

| Name     | Description                                            | Type   |
| :------- | :----------------------------------------------------- | :----- |
| `width`  | The width (don't forget the CSS units i.e. 100**px**)  | string |
| `height` | The height (don't forget the CSS units i.e. 100**px**) | string |
| `src`    | The image URL (publicly available)                     | string |

### Action

| Name    | Description      | Type   |
| :------ | :--------------- | :----- |
| `label` | The button label | string |
| `href`  | The target URL   | string |

### Social

| Name   | Description                | Type                                                                      |
| :----- | :------------------------- | :------------------------------------------------------------------------ |
| `name` | Provider name              | one of twitter, facebook, instagram, pinterest, tiktok, whatsapp, youtube |
| `href` | The target social page URL | string                                                                    |

### Address

| Name         | Description                                                   | Type   |
| :----------- | :------------------------------------------------------------ | :----- |
| `firstLine`  | The address first line (e.g. Bohemian Inc, 221B Baker Street) | string |
| `secondLine` | The address second line (e.g. London, United Kingdom)         | string |


### Steps

| Name    | Description              | Type                        |
| :------ | :----------------------- | :-------------------------- |
| `title` | The title above the list | string/html                 |
| `items` | List items               | array<[steps-item](#social)> |

### Steps item

| Name          | Description          | Type           |
| :------------ | :------------------- | :------------- |
| `icon`        | The item icon        | [image](#image) |
| `description` | The item description | string/html    |

### Article

| Name       | Description               | Type             |
| :--------- | :------------------------ | :--------------- |
| `icon`     | The article icon          | [image](#image)   |
| `title`    | The article title         | string/html      |
| `subtitle` | The article subtitle      | string/html      |
| `preview`  | The article short preview | string/html      |
| `action`   | The item description      | [action](#action) |

