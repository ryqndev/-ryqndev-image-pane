# @ryqndev/image-pane

## Usage 
```jsx
    <ImagePane
        className={cn.image}
        src='https://i.pinimg.com/736x/76/93/59/76935964bca553da191831f6b800d262.jpg'
        alt='boba watch various screens'
        content={{
            tag: '/ boba watch',
            title: 'splash art',
            description:
                'This is an overview of the splash art that was created for the Boba Watch. The splash art is a combination of the the various screens that can be accessed.',
        }}
    />
```
![Example](./example.png)

## Parameters
|Prop Name|Value|Example|Required|
|---|---|---|---|
|className|string|`cn.image` - using CSS modules|No|
|src|string|https://boba.watch/bobawatch.png|Yes|
|alt|string|view showing various screens from the app|No, but recommended for a11y|
|content|object| <pre>{ <br />    tag: 'boba watch',<br />    title: 'Splash Art',<br>    description: 'This is an overview of the splash art that was created for the Boba Watch. The splash art is a combination of the the various screens that can be accessed.' <br/>}</pre> | No, but recommended for a11y|

## Styling

It is preferred to style the colors with CSS variables. Set these variables accordingly to change the colors of the component. If more custom styling is needed, you can do it through the `className` parameter mention above.

This is an opinionated component and thats why only basic styling is supported naturally.

|Variable Name|Default Value|
|---|---|
| --image-pane-background-color | #ffffff |
| --image-pane-border-color | #e0e0e0 |
| --image-pane-title-color | #f68080 |
| --image-pane-span-color | #ffb3b3 |
| --image-pane-content-color | #666 |
| --image-pane-dot-color | #f68080 |
| --image-pane-close-border | #88888844 |
| --image-pane-box-shadow | #aaa |

