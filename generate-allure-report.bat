@echo off
npx allure generate allure-results --clean -o allure-report ^
&& npx allure open allure-report