Feature: Перевірка головної сторінки

Scenario: Site is opened and url is correct
  Given I open the main page
  Then The url should be correct

  Scenario: Header elements are correct
    Then The header elements should be correct

    Scenario: Header icon is present
      Then The header icon should be visible