This prompt is designed to guide CoPilot in editing and generating code within a Python FastAPI project, ensuring adherence to best practices and automatic documentation updates.

## Core Principles

When editing or generating code, ALWAYS prioritize the following principles:

- **Single Responsibility Principle (SRP):** Each function, class, or module should have one, and only one, reason to change.
- **Open/Closed Principle (OCP):** Code should be open for extension but closed for modification. Use inheritance or interfaces to add functionality without altering existing code.
- **Liskov Substitution Principle (LSP):** Subtypes must be substitutable for their base types without affecting correctness.
- **Interface Segregation Principle (ISP):** Clients should not be forced to depend on interfaces they don't use. Favor smaller, specific interfaces.
- **Dependency Inversion Principle (DIP):** High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.
- **Keep it Simple, Stupid (KISS):** Favor simplicity over complexity.
- **You Ain't Gonna Need It (YAGNI):** Don't add functionality until it's actually needed.
- **Don't Repeat Yourself (DRY):** Avoid duplicating code. Extract common logic into reusable functions or classes.
- **Separation of Concerns (SoC):** Separate concerns like data access, business logic, and presentation.
- **Principle of Least Astonishment (POLA):** Code should behave as expected, following common conventions.

## FastAPI Specific Guidelines

- **Asynchronous Operations:** Utilize `async` and `await` for I/O-bound operations to maximize performance.
- **Pydantic Models:** Use Pydantic models for data validation, serialization, and documentation. Define clear input and output schemas.
- **Dependency Injection:** Leverage FastAPI's dependency injection system for managing dependencies and improving testability.
- **Path Operations:** Use appropriate HTTP methods (GET, POST, PUT, DELETE, etc.) for path operations.
- **Error Handling:** Implement robust error handling using FastAPI's exception handling mechanisms. Return appropriate HTTP status codes and error messages.
- **Middleware:** Use middleware for cross-cutting concerns like authentication, logging, and request processing.
- **Security:** Implement security measures such as authentication, authorization, and input validation to protect against vulnerabilities.
- **Background Tasks:** Use background tasks for long-running or non-critical operations.
- **Streaming Responses:** Use streaming responses for large datasets or real-time data.
- **WebSockets:** Implement WebSocket endpoints for real-time communication.

## Documentation

- **Automatic API Documentation (Swagger/OpenAPI):** Ensure that all endpoints are automatically documented using FastAPI's built-in Swagger/OpenAPI support. Review and enhance the generated documentation as needed.
- **Docstrings:** Write clear and concise docstrings for all functions, classes, and methods. Follow the Google Python Style Guide for docstring formatting.
- **Type Hints:** Use type hints extensively to improve code readability and enable static analysis.
- **Update Documentation:** Whenever code is modified, ensure that the documentation is updated accordingly. This includes updating docstrings, API documentation, and any relevant README files.
- **Test Documentation:** Document test cases and scenarios in the test files:
  - Purpose of each test class and method
  - Test data preparation and assumptions
  - Expected outcomes and assertions
  - Special setup or cleanup requirements

## Testing Guidelines

- **Test Structure:** Follow the existing test pattern using pytest fixtures and the AAA (Arrange-Act-Assert) pattern.
- **Test Coverage:** Aim for comprehensive test coverage including:

  - Unit tests for individual components
  - Integration tests for API endpoints
  - End-to-end tests for complete workflows
  - Edge cases and error scenarios

- **Test Organization:**

  ```python
  class TestFeatureName:
      @pytest.mark.asyncio
      async def test_specific_functionality(self, client: AsyncClient):
          # Arrange
          test_data = {...}

          # Act
          response = await client.post("/endpoint", json=test_data)

          # Assert
          assert response.status_code == 200
          assert response.json() == expected_result
  ```

- **Mock Dependencies:** Use pytest fixtures and mocking to isolate components:

  - Mock database connections
  - Mock external service calls
  - Mock authentication/authorization

- **Test Categories:**

  - **Success Cases:** Test expected behavior with valid inputs
  - **Failure Cases:** Test error handling with invalid inputs
  - **Edge Cases:** Test boundary conditions and special scenarios
  - **Performance Tests:** Test response times and resource usage

- **Best Practices:**
  - Keep tests independent and isolated
  - Use meaningful test names that describe the scenario
  - Use appropriate fixtures for common setup
  - Clean up test data after tests
  - Use parameterized tests for multiple scenarios
  - Add comments explaining complex test scenarios

## Instructions for CoPilot

1.  **Understand the Context:** Carefully analyze the existing code and the surrounding context before making any changes.
2.  **Follow the Principles:** Adhere to the core principles and FastAPI-specific guidelines outlined above.
3.  **Write Clean Code:** Write code that is readable, maintainable, and well-documented.
4.  **Test Thoroughly:** Write unit tests and integration tests to verify the correctness of the code.
5.  **Update Documentation:** Update the documentation to reflect any changes made to the code.
6.  **Ask Questions:** If you are unsure about anything, ask for clarification.

## Example Scenarios

- **Adding a new endpoint:** Create a new path operation function, define input and output Pydantic models, implement error handling, and update the API documentation.
- **Modifying an existing endpoint:** Update the code to reflect the desired changes, ensure that the changes do not break existing functionality, and update the documentation accordingly.
- **Refactoring code:** Refactor the code to improve its readability, maintainability, and performance, while adhering to the core principles.
- **Adding tests:** Write unit tests and integration tests to verify the correctness of the code.
- **Updating dependencies:** Update the project's dependencies to the latest versions, and ensure that the code is compatible with the new versions.

## Example Prompt

"Refactor the `get_user` endpoint in `users.py` to use a database dependency and improve error handling. Ensure the code adheres to SRP and update the docstring and OpenAPI schema."

## Important Considerations

- **Security:** Always prioritize security when writing code. Be aware of common vulnerabilities and take steps to mitigate them.
- **Performance:** Optimize code for performance, but only after identifying bottlenecks.
- **Scalability:** Design the application to be scalable to handle increasing traffic and data volumes.

## Example Test Scenarios

- **API Endpoint Testing:**

  ```python
  async def test_create_user_success(self, client: AsyncClient):
      # Arrange
      user_data = {"username": "test_user", "email": "test@example.com"}

      # Act
      response = await client.post("/users/", json=user_data)

      # Assert
      assert response.status_code == 201
      assert response.json()["username"] == user_data["username"]
  ```

- **Error Handling Testing:**

  ```python
  async def test_create_user_duplicate_email(self, client: AsyncClient):
      # Arrange
      existing_user = {"username": "existing", "email": "existing@example.com"}
      await client.post("/users/", json=existing_user)

      # Act
      response = await client.post("/users/", json=existing_user)

      # Assert
      assert response.status_code == 400
      assert "email already exists" in response.json()["detail"]
  ```
