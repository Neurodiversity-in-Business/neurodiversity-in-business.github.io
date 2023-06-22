# Neurodiversity In Buisness Website  [![Twitter][1.1]][1]
[1.1]: http://i.imgur.com/tXSoThF.png (twitter icon with padding)
[1]: https://twitter.com/NDinBusiness


[![Node.js CI](https://github.com/Neurodiversity-in-Business/neurodiversity-main/actions/workflows/node.js.yml/badge.svg)](https://github.com/Neurodiversity-in-Business/neurodiversity-main/actions/workflows/node.js.yml) [![Docker Image CI](https://github.com/Neurodiversity-in-Business/neurodiversity-main/actions/workflows/docker-image.yml/badge.svg)](https://github.com/Neurodiversity-in-Business/neurodiversity-main/actions/workflows/docker-image.yml)

## Welcome
This is the public work repository for the Neurodiversity in Buisness Website.

## About us

NiB is a business-led forum functioning as an industry group for organisations to share industry good practice on ND recruitment, retention and empowerment.

The vision is to foster a corporate environment where neurodivergent people are understood and form an invaluable part of the work culture.

We will achieve this by creating a best-practice business community to share indispensable insight for:

- Employers - Create awareness as to the benefits and strengths of neurodiversity in the workplace.
- The Neurodivergent - Empowerment, recognition, help and guidance to navigate a successful, happy and independent career path.​
- The Neurotypical - To have a better understanding and facilitate allyship and respect with neurodivergent colleagues.

## Our Mission
- Educate - Raise acceptance of Neurodivergent people in companies, what neurodiversity is and how neurodivergent people contribute to the employee mix.
- Demonstrate - Show how companies benefit from being Neuroinclusive, show both social and economic aspects. Present what benefits come from unlocking and including neurodivergent talent.
- Celebrate - Celebrating Neurodiversity and the contribution it brings to create an environment where Neurodivergent people feel comfortable disclosing and speaking up.
- Empower - Supporting neurodivergent individuals and guiding them in their professional life, helping them navigate worthwhile, independent and fulfilling careers

### Why focus on Neurodiversity?
Only 16% of autistic adults are in full time paid employment 
(National Autistic Society) 
Only 1 in 10 organisations are focusing on neurodiversity at work
(CIPD Poll 2018)
45% of people have lost or left their job because of challenges caused by autism
(National Autistic Society) 

Neurodiversity describes the amazing variety in human neurology, thinking, communication styles and expression. Those typically excluded are a wide spectrum of neurodivergent conditions, characteristics and expression including conditions such as Autism Spectrum Condition, Attention Deficit Hyperactivity Disorder, Dyslexia, Dyscalculia, Developmental Language Disorder, and Dyspraxia. 15-20% of the world population is Neurodivergent (rising sharply in STEM tertiary education). 

By embracing Neurodiversity and the contributions every kind of mind can make businesses unleash long term potential benefits that enable their teams and their people to make an impact that matters. 

### Business Drivers:
- Economic – Diversity of thought is critical to an innovative workforce, the neurodivergent represent a spectrum of different styles of thinking contributing to this. 
- Sustainability – Provides access to hidden talent pools and reduces talent turnover. 
- Legal – Neurodivergent characteristics are protected by the Equality Act. 
- Societal Impact Drivers
- Moral – Empowering diversity is simply the right thing to do. 
- Social – Social responsibility and making an impact in the community is increasingly critical to a business’ brand. 

### The Strengths
Neurodivergent diagnoses do not impact intelligence and innovative thinking, self-starting motivation, attention to detail and resilience are often overrepresented in these different thinkers.  

### Other Diversity & Inclusion
Acceptance and inclusion for Neurodiversity strongly correlates with employee well-being and mental health. 
Exclusion of the Neurodivergent is observed to exacerbate other areas of exclusion, with Neurodivergent Women, LGBTQ+ Neurodivergent People or Neurodivergent people who belong to ethnic minorities facing complex challenges to recognition and inclusion.
Please visit neurodiversity.net for content originally hosted on neurodiversity.com

## Developer Notes

### Docker with Build of Angular Application Directly
First run the npm build
```npm run-script build```
Then Run the following to create the docker image
```npm run-script dockerBuild```
And then run the image with docker.
```npm run-script dockerRun```

### Development server

Run `npm run-script start-dev` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run in another shell
```webdriver-manager start```

Then run `npm run-script e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

You will need to have protractor installed globlally for this to work ```npm -g install protractor```

You will also need the image running on port 8080.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
