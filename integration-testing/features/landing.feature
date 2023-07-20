Feature: Landing Page
    This feature lets a user see the landing page.
    Scenario: Basic increment scenario
        Given I go to "http://localhost:8080/"
        When I click on the Skip to Content link
        Then the first header has focus
