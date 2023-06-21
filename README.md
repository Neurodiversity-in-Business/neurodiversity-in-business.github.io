# Neurodiversity In Buisness Website [![Node.js CI](https://github.com/Neurodiversity-in-Business/neurodiversity-main/actions/workflows/node.js.yml/badge.svg)](https://github.com/Neurodiversity-in-Business/neurodiversity-main/actions/workflows/node.js.yml) [![Docker Image CI](https://github.com/Neurodiversity-in-Business/neurodiversity-main/actions/workflows/docker-image.yml/badge.svg)](https://github.com/Neurodiversity-in-Business/neurodiversity-main/actions/workflows/docker-image.yml)

## Welcome
This is the public work repository for the Neurodiversity in Buisness Website.

## About us

NiB is a business-led forum functioning as an industry group for organisations to share industry good practice on ND recruitment, retention and empowerment.

The vision is to foster a corporate environment where neurodivergent people are understood and form an invaluable part of the work culture.

We will achieve this by creating a best-practice business community to share indispensable insight for:

- Employers - Create awareness as to the benefits and strengths of neurodiversity in the workplace.
- The Neurodivergent - Empowerment, recognition, help and guidance to navigate a successful, happy and independent career path.​
- The Neurotypical - To have a better understanding and facilitate allyship and respect with neurodivergent colleagues.


## Our Values & Mission
Our values are to ensure that the view of neurodivergent people are central to everything we do. By fostering collaboration we can develop and share best-practice for the benefit of all.  

## Our Mission
- Educate - Raise acceptance of Neurodivergent people in companies, what neurodiversity is and how neurodivergent people contribute to the employee mix.
- Demonstrate - Show how companies benefit from being Neuroinclusive, show both social and economic aspects. Present what benefits come from unlocking and including neurodivergent talent.
- Celebrate - Celebrating Neurodiversity and the contribution it brings to create an environment where Neurodivergent people feel comfortable disclosing and speaking up.
- Empower - Supporting neurodivergent individuals and guiding them in their professional life, helping them navigate worthwhile, independent and fulfilling careers

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
