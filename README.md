# Web-Automation-with-Playwright

CheqPlease Suites Test Automation ensures smooth booking, ordering, and payment flows. It validates suite selection, cart management, and secure transactions.

## Video Output

https://github.com/user-attachments/assets/8673500a-14a1-4729-85e4-8b4bab5feee3

## What is Automation?

Automation is the practice of using software tools and scripts to perform tasks that would typically require human intervention. In the context of software testing, automation involves using specialized tools to execute test cases and compare the actual outcomes with the expected results automatically.

# Test Scenario for CheqPlease Suites  

1. **Visit the Website:**  
   - Open [CheqPlease Suites UAT](https://suites.uat.cheqplease.com/) in a web browser.  

2. **Log In:**  
   - Use the following credentials:  
     - **Email:** automate.cheq@yopmail.com  
     - **Password:** Automation@2025  

3. **Select Event Date:**  
   - Choose **17 March** from the date selection.  

4. **Choose an Event:**  
   - Pick **"Automation Horizon"** from the event list and proceed.  

5. **Select a Suite:**  
   - Choose any suite from the available options and continue.  

6. **Save Suite Preferences:**  
   - Set the selected suite as the **default preference**.  

7. **Add Items to Cart:**  
   - Select **one item from each category** and click **View Cart**.  

8. **Pre-Order and Payment Selection:**  
   - Save the **pre-order** and select **Credit Card** as the payment method.  

9. **Enter Test Card Details:**  
   - **Card Number:** 3700 000000 00002  
   - **Expiry Date:** 03/30  
   - **CVC/CVV:** 7373  
   - **Name on Card:** CHEQ by Cantaloupe  

10. **Verify Subtotal:**  
    - Click on **Verify Subtotal** to confirm the amount.  

11. **Validate Test Results:**  
    - Check for expected behaviors such as:  
      - Correct subtotal calculation.  
      - Successful payment processing or relevant error messages.

## Technology used:
- Playwright
- Visual Studio Code
- Javascript

## How to run this project

- Clone this project
- First install dependencies:
 ```npm install```
 
- Then run the test:
 ```npx playwright test```

## Screenshots (Allure Report)

![image](https://github.com/user-attachments/assets/b461ac96-801b-4f8a-aa36-b2592e08585c)
![image](https://github.com/user-attachments/assets/601edcc7-a0fb-4843-aa92-a3fc0f0c0860)
![image](https://github.com/user-attachments/assets/c6d23ce6-d652-4d37-a5ea-8db8c33dda29)
![image](https://github.com/user-attachments/assets/6666dae3-2650-4416-be61-6fee85db05a1)
![image](https://github.com/user-attachments/assets/99e16cf7-bbd1-4bc7-9181-3cadf6abec8a)






