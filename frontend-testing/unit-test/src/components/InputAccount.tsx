export const InputAccount = () => {
  return (
    <fieldset>
      <legend>Input account information</legend>
      <div>
        <label>
          Mail address
          <input type="text" placeholder="test@hoge.com" />
        </label>
      </div>
      <div>
        <label>
          Password
          <input type="password" placeholder="more than 8 characters" />
        </label>
      </div>
    </fieldset>
  )
}
