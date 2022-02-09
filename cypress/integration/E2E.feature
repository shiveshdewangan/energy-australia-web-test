Feature: Festivals List

  Scenario: End to End Testing of Festivals list

    Given User is at the login page
    And User verifies the title as "EaCodingTest"
    And User verifies the url as "http://localhost:4200/festivals"
    Then User is able to see the list of festivals